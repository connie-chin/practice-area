'use strict';
let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) todos = JSON.parse(previousTodosJSON);
//^ with these lines of code, app uses the data from localStorage if it wasn't null, or reuse previous data that was saved before the browser was refreshed
window.addEventListener('beforeunload', () => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
