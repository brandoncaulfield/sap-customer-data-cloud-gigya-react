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
  const { handleSubmit } = useForm();
  const classes = useStyles();
  let query = useQuery();
  const email = query.get("email");
  const nickname = query.get("nickname");
  const loginProvider = query.get("loginProvider");
  const photo = query.get("photo");

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
