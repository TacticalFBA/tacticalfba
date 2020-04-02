import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Parser from "html-react-parser";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function RecipeReviewCard({ post, history }) {
  const { date, title, body, cover } = post;
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={() => {
        history.push(`/post/${post.id}`);
      }}
    >
      <CardHeader
        title={title}
        subheader={date}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "p" }}
      />
      <CardMedia className={classes.media} image={cover} title="blog cover" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Parser(body.substring(0, 120) + "......")}
        </Typography>
      </CardContent>
    </Card>
  );
}
