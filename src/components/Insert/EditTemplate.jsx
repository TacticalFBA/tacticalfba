import React, { useState } from "react";
import { ProductConsumer } from "../../context/productContext";
import { sampleTemplate } from "../../data";
import { db, storage } from "../../config/Firebase";

// import components
import ThemeColor from "./ThemeColor";
import T1 from "./T1";
import T2 from "./T2";

export default function EditTemplate({ history, match }) {

  // initialize template content with pid and uid
  const pid = parseInt(match.params.pid);
  const uid = JSON.parse(localStorage.getItem("uid"));
  let tempContent = sampleTemplate;
  tempContent.uid = uid;
  tempContent.pid = pid;

  const [content, setContent] = useState(tempContent);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);


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

  const saveTemp = () => {
    if (localStorage.getItem("template") === null) {
      localStorage.setItem("template", JSON.stringify([content]));
    } else {
      let newTemplate = JSON.parse(localStorage.getItem("template"));
      newTemplate = [...newTemplate, content];
      localStorage.setItem("template", JSON.stringify(newTemplate));
    }

    history.push(`/address/${content.templateName}`);

    // const name = `${Math.random()}${image.name}`;
    // const uploadTask = storage.ref(`images/${name}`).put(image);
    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {
    //     // progrss function ....
    //     const newProgress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setProgress(newProgress);
    //   },
    //   error => {
    //     // error function ....
    //     console.log(error);
    //   },
    //   () => {
    //     // complete function ....
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then(url => {
    //         // console.log(url);
    //         let newContent = Object.assign({}, content);
    //         newContent.front.frontImg = url;
    //         setContent(newContent);
    //         db.collection("savedTemplates").add(content)
    //           .then(() => {
    //             console.log("Document successfully written!");
    //             history.push("/address");
    //           })
    //           .catch(error => {
    //             console.error("Error writing document: ", error);
    //           });
    //       });
    //   }
    // );
  };

  // const saveTemp = async () => {
  //   await handleUpload();
  // };

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
    <div className="container pt-5">
      <ProductConsumer>
        {value => {
          return (
            <div>
              <h4 className="pt-5">Edit Template: </h4>
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
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  );
}
