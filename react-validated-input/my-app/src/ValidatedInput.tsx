import { useState } from 'react';
import { TbLetterX } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa';

export function ValidatedInput() {
  const x = <TbLetterX className="x" />;
  const check = <FaCheck className="check" />;
  const [password, setPassword] = useState('');

  function checkInput() {
    if (password.length === 0) return 'A password is required.';
    else if (password.length < 8) return 'Your password is too short.';
    else if (!/\d/.test(password))
      return 'Your password must contain at least one digit.';
    else if (!/[A-Z]/.test(password))
      return 'Your password must contain at least one capital letter.';
    else if (!/[!@#$%^&*()]/.test(password))
      return 'Your password must contain at least one special character (!, @, #, $, %, ^, &, *, (, or )).';
    else return null;
  }

  function whichIcon() {
    if (checkInput()) return x;
    return check;
  }
  return (
    <div className="wrapper">
      <label>Password</label>
      <div className="input-check">
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="icon">{whichIcon()}</div>
      </div>
      <div>{checkInput()}</div>
    </div>
  );
}
