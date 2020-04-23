import React, { useRef } from "react";
import { Editor as DraftEditor } from "draft-js";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import styled from "styled-components";
import Toolbar from "./toolbar";

const toolbarPlugin = createToolbarPlugin();

export default function Editor({ editorState, updateEditorState }) {
  const editor = useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  return (
    <React.Fragment>
      <EditorWrapper>
        <Toolbar
          editorState={editorState}
          updateEditorState={updateEditorState}
        />
        <EditorContainer>
          <DraftEditor
            ref={editor}
            editorState={editorState}
            onChange={updateEditorState}
            onClick={updateEditorState}
          />
        </EditorContainer>
      </EditorWrapper>
    </React.Fragment>
  );
}

const EditorWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const EditorContainer = styled.div`
  display: flex;
  min-height: 9em;
  border-radius: 4px;
  background-color: #fff;
  padding: 1rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  border: #ccc 1px solid;
`;
