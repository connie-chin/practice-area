import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import './App.css';

function App() {
  return (
    <>
      <h3>Uncontrolled Form</h3>
      <RegistrationFormUncontrolled />
      <h3>Controlled Form</h3>
      <RegistrationFormControlled />
    </>
  );
}

export default App;
