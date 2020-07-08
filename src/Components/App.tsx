import React from "react";
import "./App.css";
import { Book } from "./book/book";
import axios from "axios";
import { connectApp, appProps } from "./App.connect";

export type Book = {
  id: string;
  title: string;
};

const Component: React.FC<appProps> = ({ fetchBooks }) => {
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

  React.useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="App">
      <header className="App-header">
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

const App = connectApp(Component);

export default App;
