import { LOADING_END, LOADING_START } from "../actions/uiActions";

const initState = {
  isLoading: false,
  errors: []
};

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true };
    case LOADING_END:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export { uiReducer };
