import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import BoardList from './components/BoardList';

const App = () => {
  const [boardData, setBoardData] = useState([]);  
  const [errorMessage, setErrorMessage] = useState('');
  const [cardData, setCardData] = useState([]); 

  useEffect(() => {
    axios.get('https://inspoboardteam404.onrender.com/boards')
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((error) => {
        setErrorMessage(<section>{error.response.data.message}</section>);
      });
  }, [boardData])

  useEffect(() => {
    axios.get('https://inspoboardteam404.onrender.com/cards')
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        setErrorMessage(<section>{error.response.data.message}</section>);
      });
  }, [cardData])

  // axios patch request; or perhaps this part now works automatically since I'm using useEffect to track [boardData]? idk;
  const updateBoardData = updatedBoard => {
    const boards = boardData.map(board => {
      if (board.id === updatedBoard.id) {
        return updatedBoard;
      } else {
        return board;
      }
    });

    setBoardData(boards);
  };

  // Add Board Data
  const addBoardData = () => {
    const form = document.getElementById("board-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
    axios.post('https://inspoboardteam404.onrender.com/boards', formData, 
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    )
  })
};

  const addCardData = () => {
    const form = document.getElementById("card-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
    axios.post('https://inspoboardteam404.onrender.com/cards', formData, 
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    )
  })
  };
// 


return (
  <div id="App">
      <div className="sidebar">
        <BoardList
          boards={boardData}
          onUpdateBoard={updateBoardData}
          // onBoardclick={openBoardData}
          />
        <div className="board-forms">
          <NewBoardForm id="board-form" addBoardCallback={addBoardData} />
        </div>
      </div>
      <div className="main-container">
        <header className="title">
          <h1>Select a Board</h1>
        </header>
        <body className="content">
          <p>Nothing to Display</p>
          <div className="card-forms">
            <NewCardForm 
            addCardCallback={addCardData} 
            />
          </div>
        </body>
      </div>
      {/* put the button [Create New Board] here in App.js, NOT in Board.js; because that makes it come up in EVERY board. we just want it once on the page */}
    </div>
  );
  
}



          
          
export default App;
          
          
          


// rough draft
// const handleLike = (id) => {
  //   setMessages(prevMessages => {
    //     const updatedMessages = prevMessages.map(message => {
      //       return message.id === id ? {...message, liked: !message.liked} : message
      //     })
      //     return updatedMessages
      //   })
      // }
      // 
      
      
      
      // const totalLikes = () => {
        //   let total = 0;
        //   for (let card of cards) {
          //     if (card.liked) {total += 1}
          //   }
          //   return total;
          // }

          /* 
          The same result can be achieved using the internal Axios serializer and corresponding shorthand method:
          
            axios.postForm('https://httpbin.org/post', {
              my_field: 'my value',
              my_buffer: new Blob([1,2,3]),
              my_file:  fileInput.files // FileList will be unwrapped as sepate fields
            });
          */
          
          
          // const addCardData = () => {
          //   axios({
          //   method: "post",
          //   url: 'https://inspoboardteam404.onrender.com/cards' ,
          //   data: document.getElementsByClassName("card-form-input"),
          //   headers: { "Content-Type": "multipart/form-data" },
          // })
          //   .then(function (response) {
          //     setCardData(response.data);
          //   })
          //   .catch(function (response) {
          //     //handle error
          //     console.log(response);
          //   });
          //     axios.post('https://inspoboardteam404.onrender.com/cards')
          //     .then((response) => {
          //       const newCard = [...cards];
          
          //       newCard.push({
          //         message: response.data.message
          //       });
          
          //       setCard(newCard);
          //     })
          //     .catch((error) => {
          //       console.log(error);
          //     });
          // };
          
          // };
          
          
          
          // const likeHandler = (id) => {
          //   axios.patch(`http://127.0.0.1:5000/cards/${id}`).then((resp) => {
          //     setCardData((prevCard) => {
          //       const updatedCard = prevCard.map((card) => {
          //         // condition ? <value to return if true> : <value to return if false>
          //         return card.id === id ? resp.data : card;
          //       });
          //       return updatedCard;
          //     });
          //   });
          // };
          /* get all the cards > from the back end : id of the board > get back the board 
          > list of cards; you want that in a state > make a function in App.js that
          takes in the id of the associated card > send it to the backend;
          patch request >> sending back the id
          loop through (map) cards >> id == the id of one that was passed in,
          increment like count by 1
          
          
          like react chatlog but needs backend request; */
          // and then this wasn't sent to me but incase its helpful for us this is the use state line 
          
          // const [cards, setCard] = React.useState(chatMessages)
          
          // rough draft
          // const handleLike = (id) => {
          //   setcard(prevcCard => {
          //     const updatedCard = prevCard.map(card => {
          //       return card.id === id ? {...card, liked: !card.liked} : card
          //     })
          //     return updatedCard
          //   })
          // }
          // 