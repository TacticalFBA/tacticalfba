import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import BlogItem from "./BlogItem";
import { PostConsumer } from "./PostContext";

export default function BlogList({ history }) {
  return (
    <div className="container">
      <Box pt={5}></Box>
      <PostConsumer>
        {({ posts }) => (
          <Grid container spacing={3}>
            {JSON.stringify(posts) !== "{}" &&
              posts.map((post) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    key={post.bid}
                    style={{ cursor: "pointer" }}
                  >
                    <BlogItem post={post} history={history} />
                  </Grid>
                );
              })}
          </Grid>
        )}
      </PostConsumer>
    </div>
  );
}
