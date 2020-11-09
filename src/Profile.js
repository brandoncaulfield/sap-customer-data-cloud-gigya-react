import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <h2>Profile Page</h2>
      {/* <Avatar src={photo} className={classes.avatar}></Avatar> */}
      <form className={classes.form} noValidate>
        {/* <p>
          Welcome back, <span style={{ fontWeight: "bold" }}> {nickname}</span>.
        </p>
        <p>
          You logged in using the email address:
          <span style={{ fontWeight: "bold" }}> {email}</span>.
        </p>
        <p>
          and logged in using the provider:
          <span style={{ fontWeight: "bold" }}> {loginProvider}</span>.
        </p> */}
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
