import React, { useRef } from "react";
import { Editor as DraftEditor } from "draft-js";
import styled from "styled-components";
import Toolbar from "./toolbar";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function Editor({
  editorState,
  updateEditorState,
  open,
  setEditorShow,
}) {
  const editor = useRef(null);
  // function focusEditor() {
  //   editor.current.focus();
  // }
  const handleClose = () => {
    setEditorShow(false);
  };

  // React.useEffect(() => {
  //   focusEditor();
  // }, []);

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
        open={open}
        PaperComponent={PaperComponent}
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          onClose={handleClose}
        >
          Hold here to drag
        </DialogTitle>
        <DialogContent dividers>
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
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}

const EditorWrapper = styled.div`
  width: 25rem;
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
