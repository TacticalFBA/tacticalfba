import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Parser from "html-react-parser";
import dateFormat from "dateformat";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function RecipeReviewCard({ post, history }) {
  const { timestamp, title, body, cover } = post;
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={() => {
        history.push(`/post/${post.bid}`);
      }}
    >
      <CardHeader
        title={title}
        // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        // Saturday, June 9th, 2007, 5:46:21 PM
        subheader={dateFormat(timestamp.toDate(), "mmmm dS, yyyy")}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "p" }}
      />
      <CardMedia className={classes.media} image={cover} title="blog cover" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Parser(body.substring(0, 100) + "......")}
        </Typography>
      </CardContent>
    </Card>
  );
}
