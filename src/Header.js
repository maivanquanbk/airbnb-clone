import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://seeklogo.com/images/A/airbnb-logo-3023AC4CBA-seeklogo.com.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" placeholder="Start your search" />
        <SearchIcon fontSize="small" className="header__search" />
      </div>

      <div className="header__right">
        <p className="header__option">Become a host</p>
        <div className="header__option header__language">
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        <div className="header__option header__avatar">
          <DehazeIcon fontSize="small" />
          <Avatar fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Header;
