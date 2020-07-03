import { bookReducer } from "./reducers";
import { booksRequested } from "./books/books.actions";
import { createStore } from "redux";

export const store = createStore(bookReducer);

console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(booksRequested());
store.dispatch(booksRequested());

// Stop listening to state updates
unsubscribe();
