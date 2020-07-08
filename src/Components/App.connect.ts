import { booksRequested } from "../state/books/books.actions";
import { connect } from "react-redux";
import { ThunkDispatch as Thunk } from "redux-thunk";

export interface appProps {
  fetchBooks: () => void;
}

export type ThunkDispatch = Thunk<{}, {}, any>;

const mapDispatchToProps = (dispatch: ThunkDispatch): appProps => ({
  fetchBooks: () => dispatch(booksRequested()),
});

export const connectApp = connect(null, mapDispatchToProps);
