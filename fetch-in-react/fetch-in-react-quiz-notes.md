# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?
  fetch. built in javascript functionality.
- What two things need to be done to properly handle HTTP request errors? Why?
  try/catch block, and res.ok
- How can `useEffect` be used to load data for a component?
  can be set up so once the component loads, it'll fetch the data we need.
- How do you use `useEffect` to load component data just once when the component mounts?
  using [], empty dependency array
- How do you use `useEffect` to load component data every time the data key changes?
  add a dependency to the array
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  react query

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
