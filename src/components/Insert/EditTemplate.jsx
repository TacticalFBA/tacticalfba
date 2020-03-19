import React, { useState } from "react";
import { ProductConsumer } from "../../context/productContext";
import { sampleTemplate } from "../../data";
import { db, storage } from "../../config/Firebase";

// import components
import ThemeColor from "./ThemeColor";
import T1 from "./T1";
import T2 from "./T2";

// import editor
import Editor from "./Editor";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { stateToHTML } from 'draft-js-export-html';

import ImageUploader from "./ImageUploader"

export default function EditTemplate({ history, match }) {

  //get random cid
  const createRandomId = () => {
    return (Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5);
  }

  // initialize template content with pid and uid
  const pid = parseInt(match.params.pid);
  const uid = JSON.parse(localStorage.getItem("uid"));
  let tempContent = sampleTemplate;
  tempContent.uid = uid;
  tempContent.pid = pid;

  const [content, setContent] = useState(tempContent);
  const [frontImage, setFrontImage] = useState(null);
  const [rearImage, setRearImage] = useState(null);
  const [progress, setProgress] = useState(0);


  // Step One : default color - choose color - sync template

  const handleColorChange = color => {
    let newContent = Object.assign({}, content);
    newContent.themeColor = color.hex;
    setContent(newContent);
  };


  // Step Two: select text area, pass the method to template

  const [editorShow, setEditorShow] = useState(false);
  const [imgUploaderShow, setImgUploaderShow] = useState(false);
  const [part, setPart] = useState("");
  const [side, setSide] = useState("");
  const [item, setItem] = useState("");

  const onSelect = (p) => {

    p = p.split("/");
    const type = p[0];
    const side = p[1];
    const item = p[2];
    setSide(side);
    setItem(item);

    if (type === "text") {
      setEditorShow(true);
      setImgUploaderShow(false);
      setPart(item);
      // get the default html of selected part
      const html = content[side][item];
      // set the default editor content
      const blocksFromHTML = convertFromHTML(html);
      const defaultContent = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(defaultContent));
    }
    if (type === "img") {
      setEditorShow(false);
      setImgUploaderShow(true);
    }
  }

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const updateEditorState = (editorState) => {
    setEditorState(editorState);
    let contentState = editorState.getCurrentContent();
    let html = stateToHTML(contentState);
    let newContent = Object.assign({}, content);
    newContent[side][item] = html;
    setContent(newContent);
  }

  // Editor End

  const handleInputChange = e => {
    let newContent = Object.assign({}, content);
    newContent[e.currentTarget.name] = e.currentTarget.value;
    setContent(newContent);
  };

  const onSelectFile = e => {
    const file = e.target.files[0];
    if (side === "front") {
      setFrontImage(file);
    } else {
      setRearImage(file);
    }

    const url = URL.createObjectURL(file);
    let newContent = Object.assign({}, content);
    newContent[side][item] = url;
    setContent(newContent);
  };


  const saveTemp = (arr) => {
    arr.forEach(file => upLoadImg(file.img, file.side, file.item))
  };

  let itemsProcessed = 0;
  const upLoadImg = (img, side, item) => {
    const name = `${createRandomId()}__${img.name}`;
    const uploadTask = storage.ref(`images/${name}`).put(img);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const newProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(newProgress);
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(name)
          .getDownloadURL()
          .then(url => {
            // console.log(url);
            let newContent = Object.assign({}, content);
            newContent[side][item] = url;
            setContent(newContent);
            itemsProcessed++;
            if (itemsProcessed === 2) {
              saveToDb();
            }
          });
      }
    );

  }

  const saveToDb = () => {
    db.collection("templates").add(content)
      .then((docRef) => {
        // console.log("Document successfully written!");
        history.push(`/address/${docRef.id}`);
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  }

  const renderTemplate = id => {
    switch (id) {
      case 1:
        return (
          <T1
            pid={id}
            history={history}
            content={content}
            onSelect={onSelect}
          />
        );
      case 2:
        return (
          <T2
            pid={id}
            history={history}
            content={content}
            onSelect={onSelect}
          />
        );
      default:
        return (
          <T1
            pid={id}
            history={history}
            content={content}
            onSelect={onSelect}
          />
        );
    }
  };

  return (
    <div className="container pt-5">
      <ProductConsumer>
        {value => {
          return (
            <div>

              {/* page title */}
              <h4 className="pt-5">Edit Template: </h4>
              <p className="mb-5"> -- Hover over to edit --</p>

              {/* preview area */}
              <div className="mb-3">{renderTemplate(pid)}</div>

              {/* edit area */}
              <div>
                {editorShow === true && <Editor
                  editorState={editorState}
                  updateEditorState={updateEditorState} />}
                {
                  imgUploaderShow === true && <ImageUploader onSelectFile={onSelectFile} />
                }
              </div >


              <ThemeColor
                color={content.themeColor}
                handleColorChange={handleColorChange}
              />
              {/* choose theme color */}


              {/* template name CANNOT BE DUPLICATE */}

              <div className="input-group my-3">
                Pick a name for your template: <input type="text" placeholder="My Template" name="templateName" onChange={e => handleInputChange(e)} />
              </div>

              <progress className="d-block" value={progress} max="100" />

              <button
                className="btn btn-small btn-primary"
                type="button"
                onClick={() => saveTemp([
                  {
                    img: frontImage,
                    side: "front",
                    item: "facePhoto"
                  }, {
                    img: rearImage,
                    side: "rear",
                    item: "companyLogo"
                  }
                ])}
              >
                save
            </button>
            </div>
          );
        }}
      </ProductConsumer>
    </div >
  );
}
