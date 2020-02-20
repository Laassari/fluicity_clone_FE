import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import ParticipationsSlider from 'components/ParticipationSlider/';
import { ReactComponent as SvgStar } from 'assets/svg/start.svg';
const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage:
      'linear-gradient(180deg, #cce7f4 0%, #ffffff 35%, #ffffff 100%)',
    minHeight: 'calc(100vh - 52px)',
    padding: theme.spacing(4, 4)
  },
  welcomeText: {
    color: blue[500],
    textTransform: 'uppercase',
    fontWeight: 600,
    fontVariant: 'all-small-caps',
    fontSize: '1.3rem'
  },
  actionText: {
    color: grey[800],
    fontSize: '2.2rem',
    marginBottom: theme.spacing(1)
  },
  recommended: {
    border: '2px dashed cyan',
    width: '100%',
    maxWidth: 300,
    height: 400,
    marginTop: 12,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <Container>
        <p className={classes.welcomeText}>Welcome,</p>
        <h1 className={classes.actionText}>Ready to participate?</h1>
        <ParticipationsSlider />

        <Box mt={7}>
          <Typography variant="h5" component="h2">
            Recommended for you
          </Typography>
          <Typography variant="subtitle1">
            A selection made just for you
          </Typography>
          <div className={classes.recommended}>
            <SvgStar width="30" height="30" style={{ color: 'cyan' }} />
            <Typography variant="subtitle1" color="textSecondary">
              To benefit from recommendations,
            </Typography>
            <Typography variant="h6">join Fluicity!</Typography>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
