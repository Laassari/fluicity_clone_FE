import React from 'react';
import {
  Button,
  CardContent,
  Card,
  Avatar,
  Typography,
  makeStyles,
  CardMedia,
  Paper
} from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Image from 'assets/images/img.jpg';

const useStyles = makeStyles(theme => ({
  postWrapper: {
    position: 'relative',
    margin: '0 8px'
  },
  action: {
    borderRadius: 30
  },
  headerImage: {
    height: 150
  },
  avatar: {
    position: 'absolute',
    top: 118,
    left: '50%',
    transform: 'translate(-50%)',
    height: 60,
    width: 60,
    boxShadow: '0 0px 0 4px white'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3)
  },
  author: {
    textTransform: 'uppercase',
    color: theme.palette.grey[700],
    fontWeight: 500,
    fontSize: 14
  },
  title: {
    marginTop: 5
  },
  excerpt: {
    fontSize: 14,
    margin: '10px 3px 20px'
  },
  projectType: {
    position: 'absolute',
    top: 50,
    padding: '6px 30px',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    color: '#fff',
    backgroundColor: cyan[500],
    textTransform: 'uppercase',
    fontSize: 12
  },
  link: {
    textDecoration: 'none'
  }
}));

function PostPreview({
  title = '',
  author = '',
  excerpt = '',
  category = 'News',
  image = Image
}) {
  const styles = useStyles();

  return (
    <Card className={styles.postWrapper}>
      <CardMedia
        className={styles.headerImage}
        image={Image}
        title="post header image"
      />
      <Avatar src={image} className={styles.avatar}>
        {author[0]}
      </Avatar>
      <Paper square className={styles.projectType}>
        {category}
      </Paper>

      <CardContent className={styles.cardContent}>
        <Typography color="textPrimary" className={styles.author}>
          {author}
        </Typography>
        <Typography variant="h5" display="block" className={styles.title}>
          {title}
        </Typography>
        <Typography color="textSecondary" className={styles.excerpt}>
          {excerpt.slice(0, 100)}...
        </Typography>

        <Link to="/spaces/space-name" className={styles.link}>
          <Button
            variant="outlined"
            color="primary"
            classes={{ root: styles.action }}
          >
            Read more
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default PostPreview;
