import { combineReducers } from "redux";

const bookReducer = (state = { foo: "bar" }) => state;

export const rootReducer = combineReducers({
  books: bookReducer
});
