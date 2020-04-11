import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";

export default function Cheatsheet({ open, handleClose }) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    const copyText = textAreaRef.current.innerHTML.replace(/<br>/g, "\r\n");
    // console.log(copyText);
    navigator.clipboard.writeText(copyText);
    setCopySuccess("Copied");
    setTimeout(() => {
      setCopySuccess("Copy");
    }, 1000);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Request for factory address information:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box mb={2}>
              Please copy the following message and send to your supplier.
              <br />
              They will fill out and send it back to you.
            </Box>
            <Box>******</Box>
            <Box ref={textAreaRef}>
              你好，我需要以下快递信息：
              <br />
              1.具体收件地址 (要求：中文填写)
              <br />
              2.收件人姓名 (要求：中文姓名)
              <br />
              3.收件人电话 (要求：11位手机号码，不需要+86)
              <br />
              <br />
              请将您的真实快递信息替换以下举例，并发还给我，谢谢！
              <br />
              Factory Address：上海市徐汇区天平路120号1220室
              <br />
              Contact Name：刘德华 <br />
              Contact Mobile：13800000000 <br />
            </Box>
            <Box>******</Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={copyToClipboard}
            color="primary"
            autoFocus
            variant="contained"
          >
            {copySuccess}
          </Button>

          <Button onClick={handleClose} color="primary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
