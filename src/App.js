
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LoginPage from './components/LoginPage.js';
import Dashboard from './components/Dashboard.js';
import './App.css';


const App = () => {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [newUser, setNewUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [isResponseVisible, setIsResponseVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('barbie');
  
  

  useEffect( () => {
    axios.get('http://127.0.0.1:5000/boards').then(resp => {
      setBoards(resp.data)
    })
  }, []);

  const deleteBoard = (boardId) => {
    axios.delete(`https://barbenheimer.onrender.com/boards/${boardId}`).then(resp => {
      setBoards(prevBoards => {
        const updatedBoards = prevBoards.filter(board => board.board_id !== boardId)
        return updatedBoards
      })
    }).catch(error => console.log(error.response.data))
  };

  const deleteCard = (cardId) => {
    if (selectedBoard) {
      axios.delete(`https://barbenheimer.onrender.com/cards/${cardId}`).then(resp => {
        setCards(prevCards => {
          const updatedCards = prevCards.filter(card => card.card_id !== cardId)
          return updatedCards
        })
      })
    };
  };
  
  const createCard = (newCardData) => {
    axios
    .post(`https://barbenheimer.onrender.com/boards/${selectedBoard.board_id}/cards`, newCardData)
    .then((response) => {
      setCards(prevCards => {
        return [...prevCards, response.data];
      })
    })
    .catch((error) => {
      console.log(error)
    });
  };
  
  const createBoard = (newBoardData) => {
    axios
    .post('https://barbenheimer.onrender.com/boards', newBoardData)
    .then((response) => {
      setBoards(prevBoards => {
        return [...prevBoards, response.data];
      })
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const selectBoard = (board) => {
    axios.get(`https://barbenheimer.onrender.com/${board.board_id}/cards`)
    .then(response => {
      setSelectedBoard(board)
      setCards(response.data)
    })
  }

  const increaseLikedCount = (id) => {
    axios.patch(`https://barbenheimer.onrender.com/cards/${id}`)
    .then(response => {
      setCards(prevCards => {
        const updatedCards = prevCards.map(card => {
          return card.card_id === id ? response.data : card
        })
        return updatedCards
      })
    })
  };

  const createUser = (newUserInfo) => {
    axios.post(`https://barbenheimer.onrender.com/user/register`, newUserInfo)
    .then(response => {
      setNewUsers(prevUsers =>{
        return [...prevUsers, response.data];
      })
      createResponseMessage("you have successfully registered")
    })
    .catch((error) => {
      if (error.response.status == 409) {
        createResponseMessage('Sorry, that username is already taken')
      } 
      else {
        createResponseMessage('Please complete all fields')
      }
    });
    
  };

  const verifyLogin = (loginInfo) => {
    console.log(loginInfo)
    axios.post(`https://barbenheimer.onrender.com/user/login`, loginInfo)
    .then(response => {
      setIsLoggedIn(true)
    })
    .catch((error) => {
      if (error.response.status == 401) {
        createResponseMessage('Your username or password was incorrect')
      } 
      else {
        createResponseMessage('Please complete all fields')
      }
    });
  }

  const createResponseMessage = (responseMessage) => {
    setResponseMessage(responseMessage)
    setIsResponseVisible(true)
    setTimeout(() => {setIsResponseVisible(false);}, 3000);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
      <div className={`${selectedTheme}-container`}>
        <main>
      
          {selectedTheme === 'barbie' ? <button className='oppenheimer-button' onClick={() => setSelectedTheme('oppenheimer')}>Oppenheimer</button> : <button className='barbie-button barbie-glow-on-hover' onClick={() => setSelectedTheme('barbie')}>Barbie</button>}
          
          
          {isLoggedIn === true && <Dashboard 
                boards={boards} 
                deleteBoard={deleteBoard} 
                selectBoard={selectBoard} 
                selectedBoard={selectedBoard} 
                cards={cards}
                createCard={createCard}
                deleteCard={deleteCard}
                increaseLikedCount={increaseLikedCount}
                createBoard={createBoard}
                selectedTheme={selectedTheme}
                handleLogout={handleLogout}
                / >
              }
            <div>
          { isLoggedIn === false ? <LoginPage verifyLogin={verifyLogin} createUser={createUser} selectedTheme={selectedTheme}/> : <button className={`${selectedTheme}-glow-on-hover ${selectedTheme}-logout-btn`} onClick={() => setIsLoggedIn(false)}>Logout</button> }
          { isResponseVisible &&
              <h3 className="response"> { responseMessage } </h3> }
            </div>

        </main>

      <footer className={`${selectedTheme}-footer`}>
        <p>© 2023 Elaine, Maz, Hannah, Raina, Angela</p>
      </footer>
    </div>
  );
}

export default App;
