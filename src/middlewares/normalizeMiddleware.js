const normalizeMiddleware = ({ dispatch, getState }) => next => action => {
  const { schema, payload, ...otherActionProps } = action;
  if (schema === undefined) {
    return next(action);
  }

  const newAction = {
    ...otherActionProps,
    payload: schema(payload)
  };

  return next(newAction);
};

export { normalizeMiddleware };
