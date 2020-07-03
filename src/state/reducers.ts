import { booksReducer } from "./books/books.reducer";
import { combineReducers } from "redux";

export const bookReducer = combineReducers({ booksReducer });
