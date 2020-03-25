import React, { useState } from 'react'
import { samples } from "../data";
import { db, storage } from "../config/Firebase";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { stateToHTML } from 'draft-js-export-html';

const InsertContext = React.createContext();

function InsertProvider(props) {

    const { pid, history, user } = props;

    const tempInsert = samples.filter(sample => sample.pid === pid)[0];
    const [content, setContent] = useState(tempInsert);

    // handle insert name
    const handleInsertName = e => {
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

    }

    // handle editor
    const updateEditorState = (editorState) => {
        setEditorState(editorState);
        let contentState = editorState.getCurrentContent();
        let html = stateToHTML(contentState);
        let newContent = Object.assign({}, content);
        newContent[item] = html;
        setContent(newContent);
    }


    const [frontImage, setFrontImage] = useState(null);
    const [rearImage, setRearImage] = useState(null);

    // handle image change
    const onSelectImg = e => {
        const file = e.target.files[0];
        const side = e.target.name;
        if (side === "frontImg") {
            setFrontImage(file);
        } else {
            setRearImage(file);
        }

        const url = URL.createObjectURL(file);
        let newContent = Object.assign({}, content);
        newContent[side] = url;
        setContent(newContent);
        // e.target.value = null;
    };

    const [spin, setSpin] = useState(false);

    // upload insert

    const [show, setShow] = useState(false);
    const [error, setError] = useState("");

    const saveTemp = (email, imgs) => {
        //check if insert name set
        if (content.iName.trim() === "") {
            setShow(true);
            setError("Please name your insert before save!");
            return false;
        }
        //check if 2 imgs, if not, set to default img
        if (content.frontImg === "/img/person.jpg") {
            setShow(true);
            setError("Please upload front image!");
            return false;
        }
        if (content.rearImg === "/img/logo.png") {
            setShow(true);
            setError("Please upload rear image!");
            return false;
        }
        setSpin(true);
        imgs.forEach(file => upLoadImg(email, file))
    };

    //get random cid
    const createRandomId = () => {
        return (Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5);
    }

    let itemsProcessed = 0;

    const upLoadImg = (email, file) => {

        const name = `${createRandomId()}__${file.img.name}`;
        const uploadTask = storage.ref(`images/${name}`).put(file.img);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progrss function ....
                const newProgress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(newProgress);
            },
            error => {
                // error function ....
                alert("im wrong");
            },
            () => {
                // complete function ....
                storage
                    .ref("images")
                    .child(name)
                    .getDownloadURL()
                    .then(url => {
                        let newContent = Object.assign({}, content);
                        newContent[file.item] = url;
                        setContent(newContent);
                        itemsProcessed++;
                        if (itemsProcessed === 2) {
                            saveToDb(email);
                        }
                    });
            }
        );
    }

    const saveToDb = (user) => {
        const ref = db.collection("users").doc(user).collection("insert");
        ref.add(content)
            .then(docRef => {
                history.push("/address");

                const comb = {
                    pid: pid,
                    iid: docRef.id,
                    iName: content.iName
                }

                localStorage.setItem("comb", JSON.stringify(comb));

            })
            .catch(error => {
                console.log("Error writing document: ", error.message);
            });
    }

    return (
        <InsertContext.Provider
            value={{
                content: content,
                spin: spin,
                user: user,
                editorShow: editorShow,
                editorState: editorState,
                item: item,
                frontImage: frontImage,
                rearImage: rearImage,
                handleInsertName: handleInsertName,
                handleThemeColor: handleThemeColor,
                onSelect: onSelect,
                updateEditorState: updateEditorState,
                onSelectImg: onSelectImg,
                saveTemp: saveTemp,
                show: show,
                error: error
            }}>
            {props.children}
        </InsertContext.Provider>
    )
}

const InsertConsumer = InsertContext.Consumer;

export { InsertProvider, InsertConsumer };