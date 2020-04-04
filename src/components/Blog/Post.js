import React from "react";
import Parser from "html-react-parser";
import Container from "@material-ui/core/Container";
import { posts } from "../../posts";
import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

export default function Post({ match }) {
  const { title, auther, date, body } = posts.filter(
    (post) => post.id === parseInt(match.params.id)
  )[0];
  const shareUrl = `https://tacticalfba.netlify.com${match.url}`;
  return (
    <div className="my-5">
      <Container maxWidth="sm">
        <h4 className="text-uppercase mb-2">{title}</h4>
        <p className="text-muted">
          <span>Published on: {date}</span>
          <span className="px-2">|</span>
          <span>by {auther}</span>
        </p>
        <div className="mt-2 mb-5">
          <span>Share: </span>
          <EmailShareButton url={shareUrl} className="mx-1">
            <EmailIcon size={28} round={true} />
          </EmailShareButton>
          <FacebookShareButton url={shareUrl} className="mr-1">
            <FacebookIcon size={28} round={true} />
          </FacebookShareButton>
          <RedditShareButton url={shareUrl} className="mr-1">
            <RedditIcon size={28} round={true} />
          </RedditShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={28} round={true} />
          </TwitterShareButton>
        </div>
        <p>{Parser(body)}</p>
      </Container>
    </div>
  );
}
