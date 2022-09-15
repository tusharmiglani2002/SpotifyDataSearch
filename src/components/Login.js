import React from "react";
import { connect } from "react-redux";
import "./Login.css";

// const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URL } =
//   process.env;
const REACT_APP_CLIENT_ID = "7ed2b54e50164eeaa4161c555de72240";
const REACT_APP_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
const REACT_APP_REDIRECT_URL = "http://localhost:3000/redirect/";

const loginHandler = () => {
  window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
};
const Login = (props) => {
  return (
    <div className="login">
      <h2>Welcome to</h2>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <h2>Data Search</h2>
      <button className="btn btn-success" type="submit" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};

export default connect()(Login);
