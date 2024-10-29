import express from 'express';

const app = express(); // app is the express app

app.use((req, res, next) => {
  console.log('Hello, World 1!');
  console.log('The date is', new Date());
  next(); // the functions work in the order they appear
});

app.use((req, res, next) => {
  console.log('Hello, World 2!');
  console.log('The date is', new Date());
  next();
});

app.listen(8080, () => {
  // wrapper for the whole server.. conventionally keep at bottom cuz not involved w middleware
  console.log('Express server listening on port 8080');
});
