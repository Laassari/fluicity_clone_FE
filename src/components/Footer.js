import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as FluicityLogo } from 'assets/svg/Logo_fluicity.svg';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as YoutubeLogo } from 'assets/svg/youtube.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  mx5: {
    marginRight: 5,
    marginLeft: 5
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));
function Footer() {
  const styles = useStyles();

  return (
    <Grid
      component="footer"
      container
      justify="space-between"
      style={{
        padding: 24,
        marginTop: 100
      }}
    >
      <Grid item>
        <Grid container>
          <FluicityLogo />
          <span className={styles.mx5}>.</span>
          <FacebookLogo className={styles.mx5} />
          <TwitterLogo className={styles.mx5} />
          <InstagramLogo className={styles.mx5} />
          <YoutubeLogo className={styles.mx5} />{' '}
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Link className={styles.link} to="/">
            About
          </Link>
          <span className={styles.mx5}>.</span>
          <Link className={styles.link} to="/">
            Terms of use
          </Link>
          <span className={styles.mx5}>.</span>
          <Link className={styles.link} to="/">
            Privacy policy
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
