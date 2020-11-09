import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import {
  yahooGigyaLogin,
  linkedinGigyaLogin,
  facebookGigyaLogin,
  twitterGigyaLogin,
} from "./gigyaWebSDK";
import gigyaWebSDK from "./gigyaWebSDK";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ history }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  // The normal Gigya account login process makes use of
  // the react-hook-form library
  const handleLogin = async (data) => {
    const params = {
      loginID: data.email,
      password: data.password,
    };
    gigyaWebSDK.accounts.login(params, {
      callback: loginCallback,
    });
  };

  const handleFacebookGigyaLogin = () => {
    facebookGigyaLogin(loginCallback);
  };

  const handleTwitterGigyaLogin = () => {
    twitterGigyaLogin(loginCallback);
  };

  const handleLinkedinGigyaLogin = () => {
    linkedinGigyaLogin(loginCallback);
  };

  const handleYahooGigyaLogin = () => {
    yahooGigyaLogin(loginCallback);
  };

  const loginCallback = (response) => {
    const nickname = response.user.nickname;
    const loginProviderSite = response.loginProvider;
    const loginProviderSocial = response.requestParams.provider;
    const email = response.user.email;
    const photo = response.user.photoURL;
    if (response.errorCode === 0) {
      // we need to do this because we get a different response depending
      // on whether we login using an account or social button
      let loginProvider;
      loginProviderSite
        ? (loginProvider = loginProviderSite)
        : (loginProvider = loginProviderSocial);
      history.push(
        `/Profile?email=${email}&nickname=${nickname}&loginProvider=${loginProvider}&photo=${photo}`
      );
    } else {
      console.error(`${response.errorMessage}`);
      alert(`${response.errorMessage}`);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(handleLogin)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register({ required: true })}
          />
          {errors.email && <span>Please enter an Email address</span>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register({ required: true })}
          />
          {errors.password && <span>Please enter a password</span>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Button
        startIcon={<FacebookIcon />}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleFacebookGigyaLogin}
      >
        Sign In With Facebook
      </Button>
      <Button
        startIcon={<TwitterIcon />}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleTwitterGigyaLogin}
      >
        Sign In With Twitter
      </Button>
      <Button
        startIcon={<LinkedInIcon />}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleLinkedinGigyaLogin}
      >
        Sign In With LinkedIn
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleYahooGigyaLogin}
      >
        Y! Sign In With Yahoo
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/SignUp" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      <Box mt={8}></Box>
    </Container>
  );
}
