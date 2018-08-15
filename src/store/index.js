import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
import { normalizeMiddleware } from "../middlewares";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, normalizeMiddleware))
);

if (process.env.NODE_ENV === "development") {
  // develop tool
  window.store = store;
}

export { store };
