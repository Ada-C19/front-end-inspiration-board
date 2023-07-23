import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LoginPage from '../components/LoginPage.js'
import Dashboard from '../components/Dashboard.js'
import './BarbiePage.css'


const OppenheimerPage = () => {
    const [boards, setBoards] = useState([]);
    const [cards, setCards] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(null);
    const [newUser, setNewUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const [isResponseVisible, setIsResponseVisible] = useState(false);
    
    

    useEffect( () => {
        axios.get('http://127.0.0.1:5000/boards').then(resp => {
        setBoards(resp.data)
        })
    }, []);

    const deleteBoard = (boardId) => {
        axios.delete(`http://localhost:5000/boards/${boardId}`).then(resp => {
        setBoards(prevBoards => {
            const updatedBoards = prevBoards.filter(board => board.board_id !== boardId)
            return updatedBoards
        })
        }).catch(error => console.log(error.response.data))
    };

    const deleteCard = (cardId) => {
        if (selectedBoard) {
        axios.delete(`http://localhost:5000/cards/${cardId}`).then(resp => {
            setCards(prevCards => {
            const updatedCards = prevCards.filter(card => card.card_id !== cardId)
            return updatedCards
            })
        })
        };
    };

    const createCard = (newCardData) => {
        axios
        .post(`http://localhost:5000/boards/${selectedBoard.board_id}/cards`, newCardData)
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
        .post('http://localhost:5000/boards', newBoardData)
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
        axios.get(`http://localhost:5000/boards/${board.board_id}/cards`)
        .then(response => {
        setSelectedBoard(board)
        setCards(response.data)
        })
    }

    const increaseLikedCount = (id) => {
        axios.patch(`http://localhost:5000/cards/${id}`)
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
        console.log(newUserInfo)
        axios.post(`http://localhost:5000/user/register`, newUserInfo)
        .then(response => {
        setNewUsers(prevUsers =>{
            console.log(response)
            return [...prevUsers, response.data];
        })
        createResponseMessage("you have successfully registered")
        })
        .catch((error) => {
        if (error.response.status === 409) {
            createResponseMessage('Sorry, that username is already taken')
        } 
        else {
            createResponseMessage('Please complete all fields')
        }
        });
        
    };

    const verifyLogin = (loginInfo) => {
        console.log(loginInfo)
        axios.post(`http://localhost:5000/user/login`, loginInfo)
        .then(response => {
        setIsLoggedIn(true)
        console.log(response)
        })
        .catch((error) => {
        if (error.response.status === 401) {
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
        <div>
            {/* <header>
            {isLoggedIn && <NavBar boards={boards} deleteBoard={deleteBoard} selectBoard={selectBoard} />}
            </header> */}
            <main>
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
                    / >
                }
            { isLoggedIn === false ? 
                <LoginPage 
                verifyLogin={verifyLogin} 
                createUser={createUser} 
                responseMessage={responseMessage} 
                isResponseVisible={isResponseVisible}
                /> : 
            <button className='logout-btn' onClick={() => setIsLoggedIn(false)}>Logout</button> }

            </main>


        </div>
    );
}

export default OppenheimerPage;

