import React from "react";
import { posts } from "../../posts";

export default function Post({ match }) {
  const { title, date, body } = posts.filter(
    post => post.id === parseInt(match.params.id)
  )[0];
  return (
    <div className="container my-5">
      <h4 className="text-uppercase mb-2">{title}</h4>
      <p className="text-muted">{date}</p>
      <p>{body}</p>
    </div>
  );
}
