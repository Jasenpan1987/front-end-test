import { combineReducers } from "redux";
import { booksReducer as books } from "./booksReducer";
import { uiReducer as ui } from "./uiReducer";

export const rootReducer = combineReducers({
  books,
  ui
});
