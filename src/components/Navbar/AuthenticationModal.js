import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Backdrop,
  Modal,
  Typography,
  Fab,
  Divider,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core';
import { ReactComponent as LogoMin } from 'assets/svg/logo_min.svg';
import { ReactComponent as SvgX } from 'assets/svg/x.svg';
import { ReactComponent as GoogleLogo } from 'assets/svg/google.svg';
import { ReactComponent as FacebookRectangleLogo } from 'assets/svg/facebook_rectangle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { USER } from 'components/store/constants';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    height: 450,
    maxHeight: '90vh',
    minHeight: 200,
    width: 600,
    minWidth: 310,
    maxWidth: '90vw',
    backgroundColor: '#fff',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[9],
    outline: 'none'
  },
  welcome: {
    backgroundColor: '#37474f',
    color: '#fff',
    padding: theme.spacing(3),
    borderTopLeftRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2)
  },
  welcomeText: {
    margin: theme.spacing(2, 0, 2)
  },
  login: {
    padding: theme.spacing(3),
    backgroundColor: '#fff',
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2)
  },
  btnClose: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  loginBtn: {
    backgroundColor: '#fff',
    margin: theme.spacing(1)
  },
  form: {
    marginTop: theme.spacing(3)
  },
  btnNext: {
    borderRadius: theme.spacing(3)
  },
  errorText: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: -5,
    marginBlock: 5
  }
}));

function AuthenticationModal({ modalOpen }) {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();
  const { checkEmailExists, login, signup } = useSelector(state => ({
    checkEmailExists: state.auth.checkEmailExists,
    login: state.auth.login,
    signup: state.auth.signup
  }));

  const isValidEmail = (email = '') => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const loginOrSignUp = async () => {
    const user = {
      person: {
        email,
        password
      }
    };

    if (checkEmailExists.success) {
      dispatch({ type: USER.LOGIN_REQUEST, payload: user });
    } else {
      user.person.first_name = firstName;
      user.person.last_name = lastName;
      dispatch({ type: USER.SIGNUP_REQUEST, payload: user });
    }
  };

  const emailAlreadyExist = email => {
    dispatch({ type: USER.CHECK_EMAIL_EXISTS_REQUEST, payload: { email } });
    setEmailIsValid(true);
  };

  const handleEmailChange = event => {
    const email = (event.target.value || '').toLowerCase();
    setEmail(email);
    if (isValidEmail(email)) {
      emailAlreadyExist(email);
    } else {
      setEmailIsValid(false);
    }
  };

  const closeModal = () => {
    dispatch({ type: USER.AUTH_MODAL_OPEN, paylaod: false });
  };

  return (
    <Modal
      open={modalOpen}
      className={styles.modal}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Grid container classes={{ root: styles.modalContent }}>
        <Grid xs={4} item classes={{ root: styles.welcome }}>
          <LogoMin width="40" />
          <Typography variant="h5" className={styles.welcomeText}>
            Welcome to Fluicity
          </Typography>
          <Typography variant="body2">
            The platform for citizen participation
          </Typography>
        </Grid>

        <Grid xs={8} item classes={{ root: styles.login }}>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h6">Join</Typography>
            <Fab
              variant="round"
              size="small"
              onClick={closeModal}
              classes={{ root: styles.btnClose }}
            >
              <SvgX style={{ color: 'gray' }} />
            </Fab>
          </Grid>
          <br />
          <br />
          <Grid container justify="center">
            <Fab variant="round" size="small" className={styles.loginBtn}>
              <FacebookRectangleLogo />
            </Fab>
            <Fab variant="round" size="small" className={styles.loginBtn}>
              <GoogleLogo />
            </Fab>
          </Grid>
          <br />
          <br />
          <Divider light />

          <form className={styles.form} noValidate autoComplete="off">
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="filled"
              size="small"
              fullWidth
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />

            {signup.fail && signup.fail['email'] && (
              <Typography className={styles.errorText} style={{ marginTop: 2 }}>
                {`email ${signup.fail['email'][0]}`}
              </Typography>
            )}

            {emailIsValid && !checkEmailExists.success && (
              <>
                <TextField
                  margin="normal"
                  id="firstname"
                  label="first name"
                  variant="filled"
                  size="small"
                  fullWidth
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />

                {signup.fail && signup.fail['first_name'] && (
                  <Typography className={styles.errorText}>
                    {`first name ${signup.fail['first_name'][0]}`}
                  </Typography>
                )}

                <TextField
                  margin="normal"
                  id="lastname"
                  label="last name"
                  variant="filled"
                  size="small"
                  fullWidth
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />

                {signup.fail && signup.fail['last_name'] && (
                  <Typography className={styles.errorText}>
                    {`last name ${signup.fail['last_name'][0]}`}
                  </Typography>
                )}
              </>
            )}

            {emailIsValid && (
              <>
                <TextField
                  margin="normal"
                  id="password"
                  label="Password"
                  type="password"
                  variant="filled"
                  size="small"
                  fullWidth
                  autoComplete="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                {signup.fail && signup.fail['password'] && (
                  <Typography className={styles.errorText}>
                    {`password ${signup.fail['password'][0]}`}
                  </Typography>
                )}
              </>
            )}
            <br />
            {login.fail && (
              <Typography className={styles.errorText}>
                {login.fail.errors}
              </Typography>
            )}
            <br />
            <Grid container justify="center">
              <Button
                variant="contained"
                color="primary"
                className={styles.btnNext}
                onClick={loginOrSignUp}
                disabled={!emailIsValid}
              >
                {login.loading || signup.loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : checkEmailExists.success ? (
                  'Log in'
                ) : (
                  'Sign Up'
                )}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default AuthenticationModal;
