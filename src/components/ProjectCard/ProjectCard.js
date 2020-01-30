import React from "react";
import "./ProjectCard.scss";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Text from "../Shared/Text/Text";

const useStyles = makeStyles({
  card: {
    maxWidth: 300
  },
  media: {
    height: 240
  }
});

const ProjectCard = props => {
  const classes = useStyles();
  const isProjectReady = props.isReady || false;

  const onPlayBtnClick = e => {
    e.preventDefault();
    window.location.assign(props.playLink);
  };

  const onSourceCodeBtnClick = e => {
    e.preventDefault();
    window.location.assign(props.sourceCodeLink);
  };
  return (
    <React.Fragment>
      <Card className={`${classes.card}${isProjectReady ? "" : " disabled"}`}>
        <div
          className="disabled-overlay"
          style={isProjectReady ? { display: "none" } : {}}
        >
          <Text weight={700} size={6}>
            Work in progress
          </Text>
        </div>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.screenshot}
            title="cardman"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={onPlayBtnClick}>
            Play
          </Button>
          <Button size="small" color="secondary" onClick={onSourceCodeBtnClick}>
            Source Code
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

ProjectCard.defaultProps = {
  isReady: true,
  playLink: "#",
  sourceCodeLink: "#"
};

export default ProjectCard;
