import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Avatar,
  Typography,
  Card,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { POST } from 'components/store/constants';
import { useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
const useStyle = makeStyles(({ spacing, palette }) => ({
  heroWrapper: {
    marginTop: spacing(4),
    borderRadius: spacing(2, 2, 0, 0)
  },
  postType: {
    backgroundColor: 'green',
    padding: spacing(0.5, 3),
    borderRadius: spacing(0, 2, 2, 0),
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 12
  },
  postDetails: {
    margin: spacing(2, 0),
    paddingRight: spacing(2)
  },
  postContent: {
    maxWidth: '80ch'
  },
  postBody: {
    padding: spacing(3, 2)
  },
  postImage: {
    maxWidth: '100%',
    display: 'block',
    margin: '0 auto'
  },
  postContentText: {
    lineHeight: spacing(5) + 'px',
    color: palette.grey[800]
  },
  grayBackground: {
    backgroundColor: 'darkgray'
  },
  publishedAt: {
    color: 'gray',
    marginRight: 8
  },
  title: {
    margin: spacing(2)
  }
}));

function PostDetails(props) {
  const styles = useStyle();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loadPost, post } = useSelector(state => ({
    loadPost: state.post.getPost,
    post: state.post.content
  }));

  useEffect(() => {
    dispatch({ type: POST.GET_POST_REQUEST, payload: id });
  }, []);

  const formatDate = () => {
    if (!post.created_at) return;
    const formated = new Date(post.created_at).toUTCString().slice(5, 22);
    return formated;
  };

  return (
    <Container>
      <Grid item className={styles.heroWrapper}>
        <Card>
          <Grid container style={{ padding: 24 }}>
            {loadPost.loading ? (
              <Skeleton
                className={styles.grayBackground}
                variant="circle"
                height={45}
                width={45}
              />
            ) : (
              <Avatar style={{ marginRight: 8 }}>A</Avatar>
            )}

            <div>
              {loadPost.loading ? (
                <Skeleton
                  className={styles.grayBackground}
                  variant="text"
                  height={24}
                  width={100}
                  style={{ marginLeft: 8 }}
                />
              ) : (
                <Typography>Author name.</Typography>
              )}
            </div>
          </Grid>

          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={styles.postDetails}
          >
            <Typography className={styles.postType}>Article</Typography>
            <Grid item>
              <Grid container>
                <Typography component="span" className={styles.publishedAt}>
                  published at
                </Typography>
                {loadPost.loading ? (
                  <Skeleton
                    className={styles.grayBackground}
                    component="span"
                    variant="text"
                    height={24}
                    width={100}
                    style={{ marginLeft: 8 }}
                  />
                ) : (
                  <Typography component="span">{formatDate()}</Typography>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid className={styles.postContent}>
            <Typography className={styles.title} variant="h5" component="h1">
              {post.title}
            </Typography>

            {post.image && (
              <img
                src={post.image}
                alt="post cover"
                className={styles.postImage}
              />
            )}

            <Box className={styles.postBody}>
              {loadPost.loading ? (
                <Skeleton
                  className={styles.grayBackground}
                  component="span"
                  variant="rect"
                  height={300}
                  width={100}
                  style={{ marginLeft: 8 }}
                />
              ) : (
                <Typography classes={{ root: styles.postContentText }}>
                  {post.description}
                </Typography>
              )}
            </Box>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
}

export default PostDetails;
