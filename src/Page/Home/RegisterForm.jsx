import "./register_form.css";
import { useState } from 'react';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + ' ' + lastName;
  const [email, setEmail] = useState('');
  const [petName, setPetName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePetNameChange(e) {
    setPetName(e.target.value);
  }

  return (
    <>
      <h2>Sign up</h2>
      <label>
        Your Name:
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:{' '}
        <input
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Your Pet Name:
        <input
          value={petName}
          onChange={handlePetNameChange}
        />
      </label>
      <button>Confirm</button>
      <p><b>{fullName}</b>'s information is looking good!</p>
    </>
  );
}