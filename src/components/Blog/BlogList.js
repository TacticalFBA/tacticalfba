import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BlogItem from "./BlogItem";
import { posts } from "../../posts";

export default function BlogList({ history }) {
  return (
    <div className="container my-5">
      <Grid container spacing={3}>
        {posts.map(post => (
          <Grid item xs={12} sm={4} key={post.id} style={{ cursor: "pointer" }}>
            <BlogItem post={post} history={history} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
