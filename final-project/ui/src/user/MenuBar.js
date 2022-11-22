import './MenuBar.css';
import React, { useContext } from "react";
import authContext from "../auth/authContext";

export default () => {
    const {authenticated,  setAuthenticated } = useContext(authContext);

    const clickEventHander = () => {
        setAuthenticated(!authenticated);
    }
  
    return (
      <div className="navbar">
        <span>{authenticated ? "Welcome back": "Please login to continue"}</span>
        <button onClick={clickEventHander}>{authenticated ? "Logout": "Login"}</button>
      </div>
    );
  
  };
  