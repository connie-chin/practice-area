import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // passing the entire form into form data
    const { username, password } = Object.fromEntries(formData); // destructuring from the object that gets returned
    console.log('uncontrolled state: ', { username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" type="text" placeholder="Username" />
      </label>
      <label>
        Password::
        <input name="password" type="password" placeholder="Password" />
      </label>
      <button>Sign Up!</button>
    </form>
  );
}
