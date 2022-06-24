import React, { useState } from "react";

import { BsBookmarksFill, BsBookmarks } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import cover from "../../assets/cover.png";

const Book = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="book__card">
      <div className="book__header">
        <img src={cover} alt="cover" />
        {props.status ? (
          <BsBookmarksFill
            className="icon"
            size="1.2rem"
            onClick={() => {
              props.handleMarkBook(props.id);
              handleCloseMenu();
            }}
          />
        ) : (
          <BsBookmarks
            className="icon"
            size="1.2rem"
            onClick={() => {
              props.handleMarkBook(props.id);
              handleCloseMenu();
            }}
          />
        )}
      </div>
      <div className="book__body">
        <div className="book__title">
          <h4>{props.title}</h4>
          <ul className={toggleMenu ? "book__menu active-menu" : "book__menu"}>
            <li
              className="book__menu-item"
              onClick={() => {
                props.handleSetUpdateBook(props.id);
                handleCloseMenu();
              }}
            >
              <AiFillEdit /> Edit
            </li>
            <li
              className="book__menu-item"
              onClick={() => {
                props.handleDeleteBook(props.id);
                handleCloseMenu();
              }}
            >
              <AiFillDelete /> Delete
            </li>
          </ul>
          <div>
            <BsThreeDotsVertical
              className="icon"
              size="1.2rem"
              onClick={handleToggleMenu}
            />
          </div>
        </div>
        <div className="book__author">
          <small className="text-light">by</small> {props.author}
        </div>
      </div>
    </div>
  );
};

export default Book;
