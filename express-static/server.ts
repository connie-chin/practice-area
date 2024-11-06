import express from 'express';

const app = express();

app.use(express.static('public')); // this is the entry point to get access to server. public and anything nested in it. THIS IS EXPRESS STATIC MIDDLEWARE

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
