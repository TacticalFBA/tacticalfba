import React, { useState, useRef } from "react";
import { samples } from "../data";
import { db, storage } from "../config/Firebase";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import htmlToImage from "html-to-image";
import getCroppedImg from "../components/Insert/previewTemplate/CropImg/cropImage";
import Compress from "compress.js";

const InsertContext = React.createContext();

function InsertProvider(props) {
  const { pid, iid, user, inserts, stepForward } = props;
  const frontRef = useRef();
  const backRef = useRef();
  let tempInsert = {};

  if (iid) {
    tempInsert = inserts.filter((insert) => insert.iid === iid)[0];
  } else {
    tempInsert = samples.filter((sample) => sample.pid === pid)[0];
  }

  const [content, setContent] = useState(tempInsert);

  // handle insert name
  const handleInsertName = (e) => {
    let newContent = Object.assign({}, content);
    newContent.iName = e.currentTarget.value;
    setContent(newContent);
  };

  // handle theme color
  const handleThemeColor = (color) => {
    let newContent = Object.assign({}, content);
    newContent.themeColor = color.hex;
    setContent(newContent);
  };

  // handle hover & over
  const [editorShow, setEditorShow] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [item, setItem] = useState("");

  const onSelect = (item) => {
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
  const updateEditorState = (editorState) => {
    setEditorState(editorState);
    let contentState = editorState.getCurrentContent();
    let html = stateToHTML(contentState);
    let newContent = Object.assign({}, content);
    newContent[item] = html;
    setContent(newContent);
  };

  // handle image change
  const onSelectImg = (e) => {
    const file = e.currentTarget.files[0];
    const side = e.currentTarget.name;
    console.log(file);
    const compress = new Compress();
    compress
      .compress([file], {
        size: 4, // the max size in MB, defaults to 2MB
        quality: 0.75, // the quality of the image, max is 1,
        maxWidth: 1920, // the max width of the output image, defaults to 1920px
        maxHeight: 1920, // the max height of the output image, defaults to 1920px
        resize: true, // defaults to true, set false if you do not want to resize the image width and height
      })
      .then((data) => {
        // returns an array of compressed images
        console.log(data);
        const img1 = data[0];
        const compressedFile = `${img1.prefix}${img1.data}`;
        let newContent = Object.assign({}, content);
        newContent[side] = compressedFile;
        setContent(newContent);
      });
  };

  const [open, setOpen] = useState(false);
  const [cropInfo, setCropInfo] = useState({
    img: "",
    aspect: 1,
    cropShape: "",
    item: "",
  });
  const handleClickOpen = (img, aspect, cropShape, item) => {
    setCropInfo({
      img: img,
      aspect: aspect,
      cropShape: cropShape,
      item: item,
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const showCroppedImage = async (url, croppedAreaPixels, rotation, item) => {
    try {
      let croppedImage = await getCroppedImg(url, croppedAreaPixels, rotation);
      console.log("done", { croppedImage });
      let newContent = Object.assign({}, content);
      newContent[item] = croppedImage;
      setContent(newContent);
      handleClose();
      // setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  const [spin, setSpin] = useState(false);

  // upload insert

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const genPreview = async (arr) => {
    let newContent = Object.assign({}, content);
    await htmlToImage
      .toJpeg(frontRef.current, { quality: 0.5 })
      .then((dataUrl) => {
        newContent.frontPre = dataUrl;
        console.log("front preview converted");
      });
    await htmlToImage
      .toJpeg(backRef.current, { quality: 0.5 })
      .then((dataUrl) => {
        newContent.backPre = dataUrl;
        console.log("back preview converted");
      });
    return newContent;
  };

  const genID = () => {
    return Number(Math.random().toString().substr(10) + Date.now()).toString(
      36
    );
  };

  const uploadImg = async (arr, cb) => {
    let newContent = Object.assign({}, content);
    let count = 0;
    for await (const image of arr) {
      const imgID = genID();
      const ref = storage.ref(`/images/${imgID}`);
      const uploadTask = ref.putString(image.dataUrl, "data_url");
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          // console.log(snapShot);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(imgID)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              newContent[image.name] = fireBaseUrl;
              count++;
              console.log(image.name + " uploaded");
              if (count === arr.length) {
                console.log("images all uploaded");
                cb(newContent);
              }
            });
        }
      );
    }
  };

  const saveToDb = (data) => {
    const ref = db.collection("users").doc(user).collection("insert");
    ref
      .add(data)
      .then((docRef) => {
        localStorage.setItem("iid", docRef.id);
        stepForward();
      })
      .catch((error) => {
        console.log("Error writing document: ", error.message);
      });
  };

  const saveTemp = async () => {
    //check if insert name set
    if (content.iName.trim() === "") {
      setShow(true);
      setError("Please name your insert before saving.");
      return false;
    }
    //check if select images
    if (!content.frontImg.includes("data")) {
      setShow(true);
      setError("Please choose front image.");
      return false;
    }

    if (!content.rearImg.includes("data")) {
      setShow(true);
      setError("Please choose rear image.");
      return false;
    }

    await setSpin(true);

    const converted = await genPreview();

    const imgArr = [
      {
        dataUrl: converted.frontImg,
        name: "frontImg",
      },
      {
        dataUrl: converted.rearImg,
        name: "rearImg",
      },
      {
        dataUrl: converted.frontPre,
        name: "frontPre",
      },
      {
        dataUrl: converted.backPre,
        name: "backPre",
      },
    ];

    uploadImg(imgArr, saveToDb);
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
        error: error,
        showCroppedImage: showCroppedImage,
        open: open,
        handleClose: handleClose,
        cropInfo: cropInfo,
        handleClickOpen: handleClickOpen,
      }}
    >
      {props.children}
    </InsertContext.Provider>
  );
}

const InsertConsumer = InsertContext.Consumer;

export { InsertProvider, InsertConsumer };
