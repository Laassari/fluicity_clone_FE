import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  TextField,
  MenuItem,
  Grid,
  Button,
  Hidden,
  Fab,
  CircularProgress,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NewIdeaImage from 'assets/images/new_idea.png';
import { ReactComponent as SvgX } from 'assets/svg/x.svg';
import { POST } from 'components/store/constants';

const useStyles = makeStyles(({ spacing, shadows }) => ({
  post: {
    margin: spacing(2, 0)
  },
  header: {
    padding: spacing(2)
  },
  content: {
    padding: spacing(2)
  },
  headerSubTitle: {
    color: 'gray',
    marginTop: spacing(0.5)
  },
  image: {
    marginTop: spacing(1),
    height: 200,
    borderRadius: spacing(1),
    boxShadow: shadows[1],
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative'
  }
}));

function NewPost() {
  const styles = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(-1);
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const { postCreate, post } = useSelector(state => ({
    postCreate: state.post.postCreate,
    post: state.post.content
  }));

  const fileSelected = event => {
    setImageFile(event.target.files[0]);
  };

  const imageUrl = () => {
    if (imageFile) {
      const link = URL.createObjectURL(imageFile);
      URL.revokeObjectURL(imageFile);
      return link;
    }
    return NewIdeaImage;
  };

  const clearImage = () => {
    setImageFile(null);
  };

  const submitPost = () => {
    const post = {
      title,
      description,
      image: encodeImageToBase64(imageUrl())
    };

    dispatch({ type: POST.CREATE_REQUEST, payload: post });
  };

  const encodeImageToBase64 = image => {
    const img = new Image(300, 300);
    img.src = image;
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');

    return dataURL.split(',')[1];
  };

  if (postCreate.success && post) {
    return <Redirect to={`/posts/${post.id}`} />;
  }
  return (
    <Container className={styles.post}>
      <Box mb={2}>
        <Card className={styles.header}>
          <Typography variant="h5" component="h1">
            Create a new Post
          </Typography>
          <Typography className={styles.headerSubTitle}>
            Your idea will be public and debated. An organization may choose to
            make it happen.
          </Typography>
        </Card>
      </Box>

      <Card className={styles.content}>
        <Box mb={4}>
          <TextField
            error={postCreate.fail && postCreate.fail['title']}
            value={title}
            fullWidth
            variant="outlined"
            placeholder="concise title..."
            label="Title"
            required
            autoComplete="off"
            onChange={event => setTitle(event.target.value)}
            helperText={
              postCreate.fail && postCreate.fail['title']
                ? `title ${postCreate.fail['title']}`
                : `${title.length}/140`
            }
          />
        </Box>

        <Box mb={4}>
          <TextField
            error={postCreate.fail && postCreate.fail['description']}
            value={description}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            placeholder="explain your idea"
            label="Description"
            required
            autoComplete="off"
            onChange={event => setDescription(event.target.value)}
            helperText={
              postCreate.fail && postCreate.fail['description']
                ? `description ${postCreate.fail['description']}`
                : `${description.length}/1000`
            }
          />
        </Box>

        {false && (
          <Box mb={3}>
            <TextField
              value={category}
              select
              fullWidth
              variant="outlined"
              label="Description"
              required
              onChange={event => setCategory(event.target.value)}
            >
              <MenuItem value={-1}>select an idea</MenuItem>
              {[1, 2, 3].map(i => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}

        <Typography>Picture cover (optional)</Typography>
        <Box mb={2}>
          <Grid
            className={styles.image}
            container
            justify="center"
            alignItems="center"
            style={{
              backgroundImage: `url(${imageUrl()})`,
              backgroundSize: imageFile ? 'contain' : 'cover'
            }}
          >
            <Button variant="contained" component="label">
              Choose an image
              <Hidden>
                <input
                  type="file"
                  accept="image/*"
                  onChange={fileSelected}
                  style={{ display: 'none' }}
                />
              </Hidden>
            </Button>
            {imageFile && (
              <Fab
                size="small"
                style={{ position: 'absolute', top: 10, right: 10 }}
                onClick={clearImage}
              >
                <SvgX />
              </Fab>
            )}
          </Grid>
        </Box>

        <Grid container justify="flex-end">
          <Button
            onClick={submitPost}
            variant="contained"
            color="primary"
            size="large"
          >
            Submit
            {postCreate.loading && (
              <CircularProgress
                color="inherit"
                style={{ marginLeft: 4 }}
                size={20}
              />
            )}
          </Button>
        </Grid>
      </Card>
    </Container>
  );
}

export default NewPost;
