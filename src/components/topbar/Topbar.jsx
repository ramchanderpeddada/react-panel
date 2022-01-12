import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarButtonContainer">
            <Link to="/newUser">
              <button className="userAddButton">Add User</button>
            </Link>
          </div>
          <div className="topbarLoginContainer">
            <Link to="/login">
              <button className="userAddButton">Login</button>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fFToRmfKO8medWPYhS_5D06SNyHQzyJB5g&usqp=CAU"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
