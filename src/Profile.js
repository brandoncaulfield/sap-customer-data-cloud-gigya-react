import React, { useState } from "react";
import gigyaWebSDK from "./gigyaWebSDK";
import { useLocation } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

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
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    // width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Profile({ history }) {
  // Trying to make use of the new React state hooks but it's been
  // a bit 'hacked' together. If you know of a better way to do
  // this please feel free to add a pull request :)
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [loginProvider, setLoginProvider] = useState();
  const [photo, setPhoto] = useState();
  const { handleSubmit } = useForm();
  const classes = useStyles();
  let query = useQuery();
  // without the 'if' statement here we get an infinite state loop.
  // I'm sure there's a better way to do this... State is affected
  // here, and also from the response after 'Edit Profile' is done.
  if (!nickname) {
    setEmail(query.get("email"));
    setNickname(query.get("nickname"));
    setLoginProvider(query.get("loginProvider"));
    setPhoto(query.get("photo"));
  }

  /**
   * Gigya Edit Profile Screen Set
   */
  const updateProfileScreenSet = () => {
    gigyaWebSDK.accounts.showScreenSet({
      screenSet: "NewRaas4nov15-ProfileUpdate",
      onAfterSubmit: (response) => {
        setEmail(response.profile.email);
        setNickname(response.profile.firstName);
        setPhoto(response.profile.photoURL);
      },
    });
  };

  /**
   * Gigya logout call
   */
  const onLogout = () => {
    gigyaWebSDK.accounts.logout({
      callback: handleOnLogout,
    });
  };

  /**
   *
   * @param {Object} response
   */
  const handleOnLogout = (response) => {
    if (response.errorCode === 0) {
      history.push("./SignIn");
    } else {
      console.error(`During logout this happened: ${response.errorMessage}`);
      alert(`During logout this happened: ${response.errorMessage}`);
    }
  };

  return (
    <div className={classes.paper}>
      <h2>Profile Page</h2>
      <Avatar src={photo} className={classes.avatar}></Avatar>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onLogout)}
      >
        <p>
          Welcome back, <span style={{ fontWeight: "bold" }}> {nickname}</span>.
        </p>
        <p>
          You logged in using the email address:
          <span style={{ fontWeight: "bold" }}> {email}</span>.
        </p>
        {/* Switch statement here based on loginProvider */}
        <p>
          and logged in using the provider:
          <span style={{ fontWeight: "bold" }}> {loginProvider}</span>.
        </p>
        <Button
          variant="contained"
          color="default"
          className={classes.submit}
          onClick={updateProfileScreenSet}
        >
          Edit Profile
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Out
        </Button>
      </form>
    </div>
  );
}

export default Profile;
