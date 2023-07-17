import React, { useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import './App.css';
import BoardList from './components/BoardList';
import axios from 'axios';

const App = () => {


  return (
    <div className="App">
      <header className="App-header">
        <BoardList />
      </header>
    </div>
  );
}

export default App;
