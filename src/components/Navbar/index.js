import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { ReactComponent as FluicityLogo } from '../../static/svg/Logo_fluicity.svg';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    display: 'flex'
  },
  logoWrapper: {
    display: 'flex'
  },
  loginBtn: {
    borderRadius: '20px'
  }
}));

const showLoginModal = () => {
  alert('show login modal');
};

function Navbar() {
  const classes = useStyles();

  return (
    <Box component="nav" boxShadow={3}>
      <Container className={classes.header}>
        <Link to="/" className={classes.logoWrapper}>
          <FluicityLogo color="black" />
        </Link>
        <Button
          classes={{ root: classes.loginBtn }}
          color="primary"
          variant="contained"
          onClick={showLoginModal}
        >
          Join
        </Button>
      </Container>
    </Box>
  );
}

export default Navbar;
