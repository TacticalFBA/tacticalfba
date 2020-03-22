import React from "react";
import styled from "styled-components";
import { RenderInlineStyles } from "./inlineStyle";

export default function Toolbar({ editorState, updateEditorState }) {
    return (
        <ToolbarContainer>
            <RenderInlineStyles
                editorState={editorState}
                updateEditorState={updateEditorState}
            />
        </ToolbarContainer>
    )
}

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 5px 0px;
  margin-bottom: 8px;
`;