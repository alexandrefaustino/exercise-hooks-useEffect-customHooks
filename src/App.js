
import React, { useState } from 'react';

function Greeting() {  
  const [ name, setName ] = useState('');

  function handleChange({target : {name, value}}) {
    setName(value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          onChange={(event) => handleChange(event)}
          id="name"
          value={name}
          name="name"
        />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
