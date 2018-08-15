const propagateToUiMiddleware = ({ dispatch }) => next => action => {
  const { raiseToUiAction, ...otherActionProps } = action;
  if (raiseToUiAction === undefined) {
    return next(action);
  }

  if (typeof raiseToUiAction === "function") {
    dispatch(raiseToUiAction);
  } else {
    dispatch({ type: raiseToUiAction });
  }
  return next({
    ...otherActionProps
  });
};

export { propagateToUiMiddleware };
