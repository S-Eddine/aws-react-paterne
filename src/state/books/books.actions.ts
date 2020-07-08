import { Book } from "../../Components/App";

export type BooksActions =
  | BooksRequested
  | BooksReceived
  | BooksRequestedFailed;

////////////////

export const booksRequested = () => {
  console.log("IN IN ");
  return { type: "BOOKS_REQUESTED" as const };
};

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
