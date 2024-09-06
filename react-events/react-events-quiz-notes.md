# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  -same as html css javascript, promises. event lets it know that its got its data back. something we can respond to
- What is an "event handler"? Which component declares the handler?
  function passed into event prop. parent component declares the handler and passes it.
- How do you pass an event handler to a React component?
  pass it on props
- What is the naming convention for event handlers?
  starts with on then camel case variable name
- What is an "event handler prop"? Which component declares the prop?
  "onButtonClick" on app in this scenario. the parent declares it and passes it.
- What are some custom event handler props a component may wish to define?
  onMenuClick , onButtonClick, etc...
- What is the naming convention for custom event handler props?
  event handler is the function. eventhandler prop is "onButtonClick", onClick is just a prop... onClick assigns an event listener that calls the event handler...

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
