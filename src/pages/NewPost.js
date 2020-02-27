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
  CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
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
  const { postCreate } = useSelector(state => ({
    postCreate: state.post.postCreate
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
    const post = {};
    dispatch({ type: POST.CREATE_REQUEST, payload: post });
  };

  return (
    <Container className={styles.post}>
      <Card className={styles.header}>
        <Typography variant="h5" component="h1">
          Create a new Post
        </Typography>
        <Typography className={styles.headerSubTitle}>
          Your idea will be public and debated. An organization may choose to
          make it happen.
        </Typography>
      </Card>
      <br />
      <br />

      <Card className={styles.content}>
        <TextField
          value={title}
          fullWidth
          variant="outlined"
          placeholder="concise title..."
          label="Title"
          required
          autoComplete="off"
          onChange={event => setTitle(event.target.value)}
          helperText={`${title.length}/140`}
        />

        <br />
        <br />
        <br />

        <TextField
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
          helperText={`${description.length}/1000`}
        />

        <br />
        <br />
        <br />

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

        <br />
        <br />
        <br />

        <Typography>Picture cover (optional)</Typography>
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
        <br />
        <br />
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
