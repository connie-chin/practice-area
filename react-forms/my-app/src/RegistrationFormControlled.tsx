import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('controlled state:', { username, password });
  }
  const [username, setUsername] = useState(''); // whenever state is updated with the onChange, it schedules a rerender
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Sign up!</button>
    </form> // value is our updated state setter value! for each
  );
}
