import { BooksState, initialBooksState } from "./books/books.model";

export interface AppState {
  booksState: BooksState;
}

export const initialAppState: AppState = {
  booksState: initialBooksState,
};
