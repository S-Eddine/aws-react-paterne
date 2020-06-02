import { Book } from "../../App";

export type BooksActions =
  | BooksRequested
  | BooksReceived
  | BooksRequestedFailed;

////////////////

export const booksRequested = () => ({ type: "BOOKS_REQUESTED" as const });

export type BooksRequested = ReturnType<typeof booksRequested>;

////////////////

export const booksReceived = (books: Book[]) => ({
  type: "BOOKS_RECEIVED" as const,
  books,
});

export type BooksReceived = ReturnType<typeof booksReceived>;

////////////////

export const booksRequestedFailed = (error: any) => ({
  type: "BOOKS_REQUSTED_FAILED" as const,
  error,
});

export type BooksRequestedFailed = ReturnType<typeof booksRequestedFailed>;
