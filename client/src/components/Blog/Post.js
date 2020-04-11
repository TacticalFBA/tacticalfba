import React from "react";
import Container from "@material-ui/core/Container";
import { db } from "../../config/Firebase";
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
import parser from "html-react-parser";
import dateFormat from "dateformat";

export default function Post({ match }) {
  const bid = match.params.id;
  const shareUrl = `https://tacticalfba.netlify.com${match.url}`;
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    const ref = db.collection("blog posts").doc(bid);
    ref
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          setPost(doc.data());
        }
      })
      .catch((error) => console.log(error.message));
  });

  const { title, timestamp, body } = post;

  return (
    <div className="my-5">
      <Container maxWidth="sm">
        {JSON.stringify(post) !== "{}" && (
          <React.Fragment>
            <h4 className="text-uppercase mb-2">{title}</h4>
            <p className="text-muted">
              <span>
                Published on: {dateFormat(timestamp.toDate(), "mmmm dS, yyyy")}
              </span>
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
            <p>{parser(body)}</p>
          </React.Fragment>
        )}
      </Container>
    </div>
  );
}
