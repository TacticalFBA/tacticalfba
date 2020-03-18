import React, { useState } from 'react'
import { UserConsumer } from "../../context/userContext"
import { sampleTemplate } from "../../data";
import { Editor, EditorState, RichUtils } from 'draft-js';


export default function InsertForm() {

    // const [content, setContent] = useState(sampleTemplate);

    const [editorState, setEditorState] = useState(sampleTemplate.front.messageBody);

    // const onChange = editorState => {
    // let newContent = Object.assign({}, content);
    // if (e.currentTarget.name.includes(".")) {
    //     const arr = e.currentTarget.name.split(".");
    //     const side = arr[0];
    //     const name = arr[1];
    //     newContent[side][name] = e.currentTarget.editorState;
    // } else {
    //     newContent[e.currentTarget.name] = e.currentTarget.editorState;
    // }
    // setContent(newContent);
    // setEditorState(editorState)
};

// const handleKeyCommand = command => {
//     const newState = RichUtils.handleKeyCommand(editorState, command);

//     if (newState) {
//         this.onChange(newState);
//         return "handled";
//     }
//     return "not-handled"
// }

// const _onBoldClick = () => {
//     this.onChange(RichUtils.toggleInlineStyle(setEditorState, 'BOLD'))
// }

return (
    <React.Fragment>
        <h6 className="mb-4">Edit:</h6>
        <UserConsumer>
            {({ user }) => {
                return (<form>
                    {/* <div className="form-group"> */}

                    {/* <button onClick={() => _onBoldClick.bind(this)}>Bold</button> */}

                    <Editor
                        editorState={editorState}
                        onChange={editorState => setEditorState(editorState)} />
                    {/* editorState={editorState}
                            // name="front.messageBody"
                            // handleKeyCommand={handleKeyCommand}
                            onChange={onChange} /> */}

                    {/* sellerName */}
                    {/* <input
                                type="text"
                                className="form-control"
                                value={sellerName}
                                name="front.sellerName"
                                onFocus={e => e.target.select()}
                                onChange={e => handleInputChange(e)}
                            /> */}

                    {/* facePhoto */}
                    {/* <input
                                className="form-control"
                                type="file"
                                name="front.facePhoto"
                                onChange={e => onSelectFile(e)}
                            /> */}

                    {/*  messageBody */}
                    {/* <textarea
                                className="form-control"
                                rows="5"
                                value={messageBody}
                                name="front. messageBody"
                                onFocus={e => e.target.select()}
                                onChange={e => handleInputChange(e)}
                            /> */}
                    {/* </div> */}

                    {/* template name CANNOT BE DUPLICATE */}
                    {/* <label htmlFor="templateName">Set Template Name</label>
                        <input
                            className="form-control"
                            type="text"
                            id="templateName"
                            name="templateName"
                            placeholder="My Template..."
                            onChange={e => handleInputChange(e)}
                        /> */}
                </form>)
            }}
        </UserConsumer>
    </React.Fragment >
)
}
