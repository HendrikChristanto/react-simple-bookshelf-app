import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Book from "./Book";

import "./booklist.css";

const Booklist = (props) => {
  return (
    <section className="booklist">
      <div className="container booklist__container">
        <div className="booklist__header">
          <h2 className="booklist__title">Booklist</h2>
          <div
            className="btn btn-third booklist__btn"
            onClick={props.handleOpenModal}
          >
            <AiOutlinePlus />
            ADD
          </div>
        </div>
        <div className="booklist__content">
          <h3>Not finished reding</h3>
          <div className="booklist__item">
            {props.incompleteBooks.length > 0 ? (
              props.incompleteBooks.map((book) => {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    status={book.status}
                    handleSetUpdateBook={props.handleSetUpdateBook}
                    handleDeleteBook={props.handleDeleteBook}
                    handleMarkBook={props.handleMarkBook}
                  />
                );
              })
            ) : (
              <span className="text-light">No books available.</span>
            )}
          </div>
        </div>
        <div className="booklist__content">
          <h3>Finished reading</h3>
          <div className="booklist__item">
            {props.completeBooks.length > 0 ? (
              props.completeBooks.map((book) => {
                return (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    status={book.status}
                    handleSetUpdateBook={props.handleSetUpdateBook}
                    handleDeleteBook={props.handleDeleteBook}
                    handleMarkBook={props.handleMarkBook}
                  />
                );
              })
            ) : (
              <span className="text-light">No books available.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booklist;
