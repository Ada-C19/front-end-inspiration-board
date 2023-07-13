// App.js
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import BoardList from './components/BoardList';

const App = () => {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/boards', { title, owner })
      .then(() => {
        setTitle('');
        setOwner('');
      })
      .catch(error => {
        console.error('Error creating board:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Board Name:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          <label>
            Board Owner:
            <input type="text" value={owner} onChange={handleOwnerChange} />
          </label>
          <button type="submit" disabled={!title || !owner}>Create New Board</button>
        </form>
        <BoardList />
      </header>
    </div>
  );
}

export default App;
