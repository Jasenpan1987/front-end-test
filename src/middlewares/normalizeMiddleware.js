// import { TRANSFORM_POSTS } from "../constants/actionTypes";

export const normalizeMiddleware = ({
  dispatch,
  getState
}) => next => async action => {
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

// export const transformMiddleware = ({
//   dispatch,
//   getState
// }) => next => async action => {
//   if (action.type !== TRANSFORM_POSTS) {
//     return next(action);
//   }

//   // { data, transformed }
//   const { posts, success, schemaFn } = action.payload;
//   const newPosts = posts.map(({ id, userId, title, body }) => {
//     return {
//       id,
//       authorId: userId,
//       title,
//       post: body
//     };
//   });

//   dispatch(success(schemaFn(newPosts)));
// };
