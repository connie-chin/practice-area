/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) todos = JSON.parse(previousTodosJSON);
// ^ with these lines of code, app uses the data from localStorage if it wasn't null, or reuse previous data that was saved before the browser was refreshed

window.addEventListener('beforeunload', (): void => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
