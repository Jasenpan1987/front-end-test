import { FETCH_BOOKS_SUCCESS } from "../actions/booksActions";

const initState = {};

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export { booksReducer };
