import React, { useEffect, useState } from 'react';

function Greeting({ initialName = '' }) {
  localStorage.setItem('name', 'Alexandre');

  const [name, setName] = useState(initialName);

  useEffect(() => {
    setName(localStorage.getItem('name'));    
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name])

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
