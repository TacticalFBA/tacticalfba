import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Box,
  makeStyles,
} from "@material-ui/core";
import Compress from "compress.js";
import { firebase, db } from "../../config/Firebase";

const useStyles = makeStyles((theme) => ({
  preview: {
    width: "50%",
  },
}));

export default () => {
  const classes = useStyles();
  const [post, setPost] = useState({
    title: "",
    body: "",
    auther: "",
    cover: "",
  });
  const handleTextChnage = (e) => {
    const tempPost = Object.assign({}, post);
    tempPost[e.currentTarget.name] = e.currentTarget.value;
    setPost(tempPost);
  };
  const handleCoverSelected = (e) => {
    const file = e.currentTarget.files[0];
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
        const img1 = data[0];
        const compressedFile = `${img1.prefix}${img1.data}`;
        const tempPost = Object.assign({}, post);
        tempPost.cover = compressedFile;
        setPost(tempPost);
      });
  };
  const handleSubmit = () => {
    // add date
    const tempPost = {
      ...post,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    // push to db
    const ref = db.collection("blog posts");
    ref
      .add(tempPost)
      .then(() => alert("posted"))
      .catch((error) => console.log(error));
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <h4>Create A Post</h4>
      </Box>
      <form>
        <Box my={2}>
          <TextField
            requied
            fullWidth
            placeholder="Title"
            type="text"
            variant="outlined"
            size="small"
            name="title"
            value={post.title}
            onChange={handleTextChnage}
          ></TextField>
        </Box>
        <Box my={2}>
          <TextField
            requied
            fullWidth
            placeholder="Auther"
            type="text"
            variant="outlined"
            size="small"
            name="auther"
            value={post.auther}
            onChange={handleTextChnage}
          ></TextField>
        </Box>
        <Box mb={2}>
          <TextField
            requied
            fullWidth
            placeholder="Body"
            variant="outlined"
            multiline
            rows="15"
            size="small"
            name="body"
            value={post.body}
            onChange={handleTextChnage}
          ></TextField>
        </Box>
        <Box mb={2}>
          <label for="cover">Cover:</label>
          <input
            type="file"
            id="cover"
            name="cover"
            onChange={handleCoverSelected}
          />
          {post.cover !== "" && (
            <Box>
              <img src={post.cover} alt="cover" className={classes.preview} />
            </Box>
          )}
        </Box>
        <Button variant="contained" onClick={handleSubmit}>
          PUBlISH
        </Button>
      </form>
    </Container>
  );
};
