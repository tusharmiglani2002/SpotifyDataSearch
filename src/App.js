import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Redirect from "./components/Redirect";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  const [expiryTime, setExpiryTime] = useState(0);

  useEffect(() => {
    let expiryTime = JSON.parse(localStorage.getItem("expiry_time"));
    setExpiryTime({ expiryTime });
  }, []);

  const setExpireTime = (expiryTime) => {
    setExpiryTime({ expiryTime });
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/redirect"
            element={<Redirect setExpiryTime={setExpireTime} {...props} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
