import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";

import Booklist from "./components/booklist/Booklist";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Search from "./components/search/Search";
import Toast from "./components/toast/Toast";

import { ToastContext } from "./context/ToastContext";

import "./styles.css";

export default function App() {
  const [books, setBooks] = useState([
    {
      id: nanoid(),
      title: "Harry Potter: The Prequel",
      author: "J.K. Rowling",
      status: false
    },
    {
      id: nanoid(),
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      status: false
    },
    {
      id: nanoid(),
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      status: false
    },
    {
      id: nanoid(),
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
      status: true
    }
  ]);
  const [booksLength, setBooksLength] = useState(books.length);
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [titleText, setTitleText] = useState("");
  const [authorText, setAuthorText] = useState("");

  const [position, setPosition] = useState("top-left");
  const { state, dispatch } = useContext(ToastContext);

  const handleNotification = (type, title, message) => {
    switch (type) {
      case "SUCCESS":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: nanoid(),
            type,
            title,
            message
          }
        });
      case "INFO":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: nanoid(),
            type,
            title,
            message
          }
        });
      case "WARNING":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: nanoid(),
            type,
            title,
            message
          }
        });
      case "DANGER":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: nanoid(),
            type,
            title,
            message
          }
        });
      default:
        return;
    }
  };

  useEffect(() => {
    setBooksLength(books.length);
  }, [books]);

  const clearAll = () => {
    setUpdateId(null);
    setTitleText("");
    setAuthorText("");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    clearAll();
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    const newBook = {
      id: nanoid(),
      title: titleText,
      author: authorText,
      status: false
    };
    const newBooks = [...books, newBook];
    setBooks(newBooks);
    handleCloseModal();
    handleNotification("SUCCESS", "Success", "Book added successfully.");
  };

  const handleSetUpdateBook = (id) => {
    const onUpdateBook = books.find((book) => book.id === id);
    if (onUpdateBook) {
      setUpdateId(onUpdateBook.id);
      setTitleText(onUpdateBook.title);
      setAuthorText(onUpdateBook.author);
      handleOpenModal();
    }
  };

  const handleUpdateBook = (event) => {
    event.preventDefault();
    const newBooks = books.map((book) => {
      if (book.id === updateId) {
        book.title = titleText;
        book.author = authorText;
      }
      return book;
    });
    setBooks(newBooks);
    handleCloseModal();
    handleNotification("SUCCESS", "Success", "Successfully Updated.");
  };

  const handleDeleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    handleNotification("SUCCESS", "Success", "Successfully Deleted.");
  };

  const handleMarkBook = (id) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.status = !book.status;
      }
      return book;
    });
    setBooks(newBooks);
    handleNotification("SUCCESS", "Success", "Successfully Updated.");
  };

  return (
    <>
      <Header booksLength={booksLength} />
      <Search searchText={searchText} handleSearchText={setSearchText} />
      <Booklist
        completeBooks={books.filter(
          (book) =>
            book.status &&
            book.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        incompleteBooks={books.filter(
          (book) =>
            !book.status &&
            book.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleSetUpdateBook={handleSetUpdateBook}
        handleDeleteBook={handleDeleteBook}
        handleMarkBook={handleMarkBook}
        handleOpenModal={handleOpenModal}
      />
      <Footer />
      <Modal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        updateId={updateId}
        titleText={titleText}
        handleTitleText={setTitleText}
        authorText={authorText}
        handleAuthorText={setAuthorText}
        handleAddBook={handleAddBook}
        handleUpdateBook={handleUpdateBook}
      />
      <Toast position={position} autoDeleteInterval={3000} />
    </>
  );
}
