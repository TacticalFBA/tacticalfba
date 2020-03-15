import React, { useState } from "react";
import { ProductConsumer } from "../../context/productContext";
import { sampleTemplate } from "../../data";
import { db, storage } from "../../config/Firebase";

// import components
import ThemeColor from "./ThemeColor";
import T1 from "./T1";
import T2 from "./T2";

export default function EditTemplate({ history, match }) {
  const [content, setContent] = useState(sampleTemplate);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const pid = parseInt(match.params.pid);

  const handleColorChange = color => {
    let newContent = Object.assign({}, content);
    newContent.themeColor = color.hex;
    setContent(newContent);
  };

  const handleInputChange = e => {
    let newContent = Object.assign({}, content);
    if (e.currentTarget.name.includes(".")) {
      const arr = e.currentTarget.name.split(".");
      const side = arr[0];
      const name = arr[1];
      newContent[side][name] = e.currentTarget.value;
    } else {
      newContent[e.currentTarget.name] = e.currentTarget.value;
    }
    setContent(newContent);
  };

  const onSelectFile = e => {
    const file = e.target.files[0];
    setImage(file);
    const url = URL.createObjectURL(file);
    const arr = e.currentTarget.name.split(".");
    const side = arr[0];
    const name = arr[1];
    let newContent = Object.assign({}, content);
    newContent[side][name] = url;
    setContent(newContent);
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress({ progress });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            let newContent = Object.assign({}, content);
            newContent.front.frontImg = url;
            setContent(newContent);
          });
      }
    );
  };

  const saveTemp = () => {
    handleUpload();
  };

  const renderTemplate = id => {
    switch (id) {
      case 1:
        return (
          <T1
            pid={id}
            history={history}
            content={content}
            handleInputChange={handleInputChange}
            onSelectFile={onSelectFile}
          />
        );
      case 2:
        return (
          <T2
            pid={id}
            history={history}
            content={content}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return (
          <T1
            pid={id}
            history={history}
            content={content}
            handleInputChange={handleInputChange}
          />
        );
    }
  };

  return (
    <ProductConsumer>
      {value => {
        const { addToCart } = value;
        return (
          <React.Fragment>
            <h4>Edit Template: </h4>
            <ThemeColor
              color={content.themeColor}
              handleColorChange={handleColorChange}
            />
            <div>{renderTemplate(pid)}</div>
            <progress value={progress} max="100" />
            <button
              className="btn btn-small btn-primary"
              type="button"
              onClick={saveTemp}
            >
              save
            </button>
          </React.Fragment>
        );
      }}
    </ProductConsumer>
  );
}
