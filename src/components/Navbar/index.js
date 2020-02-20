import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { ReactComponent as FluicityLogo } from 'assets/svg/Logo_fluicity.svg';
import AuthenticationModal from './AuthenticationModal';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent: 'space-between',
    display: 'flex'
  },
  logoWrapper: {
    display: 'flex'
  },
  loginBtn: {
    borderRadius: theme.spacing(3)
  },
  nav: {
    position: 'relative',
    zIndex: 1
  }
}));

function Navbar() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const showLoginModal = () => {
    setModalOpen(true);
  };

  return (
    <Box component="nav" className={classes.nav} boxShadow={3}>
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

      <AuthenticationModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </Box>
  );
}

export default Navbar;
