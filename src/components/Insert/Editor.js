import React from 'react'
import { Editor as DraftEditor } from "draft-js";
import styled from "styled-components";
import Toolbar from "../../toolbar";

export default function Editor({ editorState, updateEditorState }) {


    return (
        <React.Fragment>
            <EditorWrapper>
                <Toolbar
                    editorState={editorState}
                    updateEditorState={updateEditorState}
                />
                <EditorContainer>
                    <DraftEditor
                        editorState={editorState}
                        onChange={updateEditorState}
                    />
                </EditorContainer>
            </EditorWrapper>
        </React.Fragment>
    )
}


const EditorWrapper = styled.div`
//   max-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 3em;
`;

const EditorContainer = styled.div`
  display: flex;
  min-height: 9em;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  padding: 5px;
  font-size: 17px;
  font-weight: 300;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;