import React from "react";

import "./header.css";

import ME from "../../assets/me.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__profile">
          <a
            href="https://github.com/HendrikChristanto"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ME} alt="me" />
          </a>
        </div>
        <div className="header__title">
          <h1>Bookshelf App</h1>
          <div className="text-light">{props.booksLength} Books Available</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
