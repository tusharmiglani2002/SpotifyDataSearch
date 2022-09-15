import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getParamsFromUrl } from "../api/functions";

const Redirect = (props) => {
  const navigate = useNavigate();
  const { setExpiryTime, history, location } = props;
  useEffect(() => {
    const access_token = getParamsFromUrl(window.location.hash);
    const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
    localStorage.setItem("params", JSON.stringify(access_token));
    localStorage.setItem("expiry_time", expiryTime);
    setExpiryTime(expiryTime);
    navigate("/home");
  }, []);
  return <div>Redirect</div>;
};
export default Redirect;
