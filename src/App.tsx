import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Book } from "./Components/book/book";
import axios from "axios";

export type Book = {
  id: string;
  title: string;
};
const App: React.FC<{}> = () => {
  const [books, setBooks] = React.useState<Book[]>();

  const fetchBook = () => {
    axios
      .get(
        "" // TODO
      )
      .then((res) => setBooks(res.data.body))
      .catch((e) => console.error(e));
    return books;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-link" onClick={fetchBook}>
          Display Books
        </div>
      </header>

      {books && (
        <div className="card">
          <div className="card-header">Books from AWS </div>
          <ul className="list-group list-group-flush">
            {books.map((book) => (
              <li className="list-group-item" key={book.id}>
                <Book title={book.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
