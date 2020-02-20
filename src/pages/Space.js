import React from 'react';
import {
  Container,
  Grid,
  Avatar,
  Typography,
  Button,
  Card,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpaceLogo from 'assets/images/img.jpg';
import SpaceCover from 'assets/images/space_cover.png';
import { ReactComponent as SvgShield } from 'assets/svg/shield.svg';
import { ReactComponent as SvgSquares } from 'assets/svg/squares.svg';

const useStyle = makeStyles(({ spacing }) => ({
  heroWrapper: {
    marginTop: spacing(4),
    borderRadius: spacing(2, 2, 0, 0)
  },
  hero: {
    height: 300,
    padding: spacing(3),
    background: `center  / cover no-repeat linear-gradient(#fff0, #0000008c), url(${SpaceCover})`,
    color: '#fff'
  },
  spaceLogo: {
    border: '4px solid #fff',
    width: 80,
    height: 80,
    marginRight: spacing(3)
  },
  btnMore: {
    borderRadius: spacing(3)
  },
  stats: {
    marginTop: spacing(1),
    color: 'gray'
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
    paddingRight: spacing(2)
  },
  postContent: {
    padding: spacing(3)
  }
}));

function Space() {
  const styles = useStyle();

  return (
    <Container>
      <Card classes={{ root: styles.heroWrapper }}>
        <Grid container alignItems="flex-end" classes={{ root: styles.hero }}>
          <Grid container alignItems="center">
            <Avatar
              alt="space logo"
              className={styles.spaceLogo}
              src={SpaceLogo}
            />
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h5" gutterBottom>
                  Idées vertes
                </Typography>
                <Grid container spacing={2}>
                  <Grid item style={{ display: 'flex' }}>
                    <SvgSquares />
                    <Typography>Intérêt général</Typography>
                  </Grid>
                  <Grid item style={{ display: 'flex' }}>
                    <SvgShield />
                    <Typography>Actif depuis novembre 2019</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ padding: 24 }}>
          <Grid item xs={6}>
            <Typography variant="body2">
              Trouvons ensemble des solutions concrètes et locales pour relever
              le défi environnemental dans nos territoires. Rendez-vous le 9
              décembre!
            </Typography>
          </Grid>
          <Grid item container xs={6} justify="flex-end">
            <Button variant="text" color="primary">
              Abonné
            </Button>
            <Button
              variant="outlined"
              color="primary"
              classes={{ root: styles.btnMore }}
            >
              Plus d'info
            </Button>
          </Grid>

          <Grid
            container
            alignItems="center"
            spacing={5}
            className={styles.stats}
          >
            <Grid item>
              <Typography variant="body2">
                43 Citoyenn(e)s engagé(e)s
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body2">
                101 Contributions citoyennes
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <br />

      <Grid item xs={8}>
        <Card>
          <Grid container style={{ padding: 24 }}>
            <Avatar style={{ marginRight: 8 }}>A</Avatar>
            <div>
              <Typography>Author name.</Typography>
              <Typography></Typography>
            </div>
          </Grid>

          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={styles.postDetails}
          >
            <Typography className={styles.postType}>Article</Typography>
            <Typography>Publié le 23 déc. 2019, 16:39</Typography>
          </Grid>

          <Box className={styles.postContent}>
            <Typography>post content goes here...</Typography>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
}

export default Space;
