import React, { useState, useRef } from "react";
import { samples } from "../data";
import { db } from "../config/Firebase";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import htmlToImage from "html-to-image";

const InsertContext = React.createContext();

function InsertProvider(props) {
  const { pid, iid, history, user, inserts } = props;
  const frontRef = useRef();
  const backRef = useRef();
  let tempInsert = {};

  if (iid.length === 1) {
    tempInsert = samples.filter(sample => sample.pid === pid)[0];
  } else {
    tempInsert = inserts.filter(insert => insert.iid === iid)[0];
  }

  const [content, setContent] = useState(tempInsert);

  // handle insert name
  const handleInsertName = e => {
    let newContent = Object.assign({}, content);
    newContent.iName = e.currentTarget.value;
    setContent(newContent);
  };

  // handle theme color
  const handleThemeColor = color => {
    let newContent = Object.assign({}, content);
    newContent.themeColor = color.hex;
    setContent(newContent);
  };

  // handle hover & over
  const [editorShow, setEditorShow] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [item, setItem] = useState("");

  const onSelect = item => {
    setItem(item);
    setEditorShow(true);
    // get the default html of selected part
    const html = content[item];
    // set the default editor content
    const blocksFromHTML = convertFromHTML(html);
    const defaultContent = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(defaultContent));
  };

  // handle editor
  const updateEditorState = editorState => {
    setEditorState(editorState);
    let contentState = editorState.getCurrentContent();
    let html = stateToHTML(contentState);
    let newContent = Object.assign({}, content);
    newContent[item] = html;
    setContent(newContent);
  };

  // handle image change
  const onSelectImg = e => {
    const file = e.target.files[0];
    const side = e.target.name;
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        let newContent = Object.assign({}, content);
        // convert image file to base64 string
        newContent[side] = reader.result;
        setContent(newContent);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const [spin, setSpin] = useState(false);

  // upload insert

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const genPreview = async arr => {
    let newContent = Object.assign({}, content);

    for (const item of arr) {
      await htmlToImage
        .toJpeg(item.ref.current, { quality: 1 })
        .then(dataUrl => {
          newContent[item.name] = dataUrl;
        });
    }

    if (iid.length === 1) {
      const ref = db
        .collection("users")
        .doc(user)
        .collection("insert");

      ref
        .add(newContent)
        .then(docRef => {
          const comb = {
            pid: pid,
            iid: docRef.id
          };

          localStorage.setItem("comb", JSON.stringify(comb));

          history.push("/address");
        })
        .catch(error => {
          console.log("Error writing document: ", error.message);
        });
    } else {
      const ref = db
        .collection("users")
        .doc(user)
        .collection("insert")
        .doc(iid);
      ref
        .update(newContent)
        .then(history.push("/cart"))
        .catch(error => {
          console.log("Error writing document: ", error.message);
        });
    }
  };

  const saveTemp = async () => {
    //check if insert name set
    if (content.iName.trim() === "") {
      setShow(true);
      setError("Please name your insert before save!");
      return false;
    }

    await setSpin(true);

    await genPreview([
      { ref: frontRef, name: "frontPre" },
      { ref: backRef, name: "backPre" }
    ]);
  };

  return (
    <InsertContext.Provider
      value={{
        frontRef: frontRef,
        backRef: backRef,
        content: content,
        spin: spin,
        user: user,
        editorShow: editorShow,
        editorState: editorState,
        item: item,
        handleInsertName: handleInsertName,
        handleThemeColor: handleThemeColor,
        onSelect: onSelect,
        updateEditorState: updateEditorState,
        onSelectImg: onSelectImg,
        saveTemp: saveTemp,
        show: show,
        error: error
      }}
    >
      {props.children}
    </InsertContext.Provider>
  );
}

const InsertConsumer = InsertContext.Consumer;

export { InsertProvider, InsertConsumer };
