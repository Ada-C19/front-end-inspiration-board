import React, { useState } from 'react';
import './App.css';
import BoardList from './components/BoardList';

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
