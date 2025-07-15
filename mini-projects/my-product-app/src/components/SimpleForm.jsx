import React, { useState } from 'react';

function SimpleForm() {
  // Step 1: State to hold form input
  const [name, setName] = useState('');

  // Step 2: Handle input change
  function handleChange(e) {
    setName(e.target.value);
  }

  // Step 3: Handle form submit
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    alert(`Hello, ${name}!`);
    setName(''); // Clear input
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label><br />
      <input
        type="text"
        value={name}            // Controlled input
        onChange={handleChange} // Updates state on typing
        placeholder="Type here..."
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
