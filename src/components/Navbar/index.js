import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Container, Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as FluicityLogo } from 'assets/svg/Logo_fluicity.svg';
import AuthenticationModal from './AuthenticationModal';
import { USER } from 'components/store/constants';

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
  const dispatch = useDispatch();
  const { user, authModalOpen } = useSelector(state => ({
    user: state.auth.user,
    authModalOpen: state.auth.authModalOpen
  }));

  return (
    <Box component="nav" className={classes.nav} boxShadow={3}>
      <Container className={classes.header}>
        <Link to="/" className={classes.logoWrapper}>
          <FluicityLogo color="black" />
        </Link>
        {!user.email ? (
          <Button
            classes={{ root: classes.loginBtn }}
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch({ type: USER.AUTH_MODAL_OPEN, payload: true });
            }}
          >
            Join
          </Button>
        ) : (
          <Button size="small">
            <Avatar style={{ width: 35, height: 35 }}>
              {user.first_name[0]}
            </Avatar>
          </Button>
        )}
      </Container>

      <AuthenticationModal modalOpen={authModalOpen} />
    </Box>
  );
}

export default Navbar;
