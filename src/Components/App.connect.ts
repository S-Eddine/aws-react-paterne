import { booksRequested } from "../state/books/books.actions";

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => {
  return {
    fetchBooks: () => dispatch(booksRequested()),
  };
};
