import { api } from "../utils/apiHelper";
import { bookSchema } from "../schema/bookSchema";
import { LOADING_START, LOADING_END } from "./uiActions";
export const FETCH_BOOKS_PENDING = "FETCH_BOOKS_PENDING";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILED = "FETCH_BOOKS_FAILED";

export const fetchBooks = () => async dispatch => {
  dispatch({ type: FETCH_BOOKS_PENDING, raiseToUiAction: LOADING_START });
  try {
    const books = await api.get("/books");
    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      payload: books,
      schema: bookSchema,
      raiseToUiAction: LOADING_END
    });
  } catch (error) {
    dispatch({
      type: FETCH_BOOKS_FAILED,
      message: "Unable to fetch books",
      raiseToUiAction: LOADING_END
    });
  }
};
