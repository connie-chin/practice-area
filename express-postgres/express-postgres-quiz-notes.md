# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  allows us to connect to our database inside our server
- How do you tell `pg` which database to connect to?
  connection string
- How do you send SQL to PostgreSQL from your Express server?

- How do you get the rows return from the SQL query?
  access the rows array
- What must you always remember to put around your asynchronous route handlers? Why?
  try catch block, a good way to handle errors.
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  use $1 and params

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
