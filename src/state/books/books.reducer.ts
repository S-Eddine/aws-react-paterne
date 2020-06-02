import { Action } from "../actions";
import { BooksState, initialBooksState } from "../books/books.model";

export function booksReducer(
  state: BooksState = initialBooksState,
  action: Action
): BooksState {
  switch (action.type) {
    case "BOOKS_REQUSTED_FAILED":
      return { ...state, error: "BOOKS_REQUSTED_FAILED" };

    case "BOOKS_RECEIVED":
      return { ...state, books: action.books, error: null };

    default:
      return state;
  }
}
