export const bookSchema = books => {
  return books.reduce((prev, next) => {
    prev[next.isbn] = next;
    return prev;
  }, {});
};
