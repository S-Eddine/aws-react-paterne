import { bookReducer } from "./reducers";
import { booksRequested } from "./books/books.actions";
import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(bookReducer, composeWithDevTools());

console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(booksRequested());
store.dispatch(booksRequested());

// Stop listening to state updates
unsubscribe();
