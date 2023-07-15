// App.js
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

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
        <NewBoardForm />
        <BoardList />

      </header>
    </div>
  );
}

export default App;
