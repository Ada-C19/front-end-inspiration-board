
import './App.css';
import BoardList from './components/BoardList'
import {useState, useEffect}  from 'react'
import axios from 'axios';
import CardList from './components/CardList';
import AddBoard from './components/BoardForm';
import AddCard from './components/CardForm'

const baseUrl = 'https://inspiration-board-api-m6he.onrender.com';

// gets all boards from backend
const getAllBoards = () =>{
  return axios.get(`${baseUrl}/board`)
  .then((response)=>{
      return response.data;
})
  .catch((error)=>{
      console.log(error);
});

}
// gets all cards from backend
const getCards = (id) => {
  return axios.get(`${baseUrl}/board/${id}/cards`)
  .then((response)=>{
    return response.data
  })
  .catch((error)=>{
    console.log(error);
  });
}
function App() {

  // board state
  const [boardData, setBoardData] = useState([])
  const fetchBoards = () =>{
    getAllBoards()
      .then((boards) =>{
        setBoardData(boards);
      }

      );
  };

  useEffect(()=>{
    fetchBoards();
  },[] );

// board preview state
  const [selectedBoard, setSelectedBoard]= useState("Select a Board")
// gets board id for post card
  const [boardId, setBoardId] = useState(0)
  const selectBoard = (id) =>{
  
  const selectedItem =  boardData.filter((ele) => ele.board_id === id)


  setSelectedBoard(`${selectedItem[0].title} - ${selectedItem[0].owner}`)
  setBoardId(id)

  }
//  card state
  const [cardData, setCardData] = useState([]);
  const fetchCards = (id) =>{
    getCards(id)
    .then((response) =>{
      setCardData(response)
   
    }

    )
  }
// submit board form
  const handleSubmit = (data) =>{
    axios.post(`${baseUrl}/board`, data)
      .then((response)=>{
        setBoardData((oldData)=>[...oldData, response.data]);
      })
      .catch((error)=> console.log(error));
  };

  const likeCard = (id) => {
    return axios
      .patch(`${baseUrl}/cards/${id}`)
      .then((response) => {
        return (response.data);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  const onLikeCard = (id) => {
    likeCard(id).then((updatedCard) => {
      setCardData((oldData) => {
        return oldData.map((card) => {
          if (card.card_id === id) {
            return updatedCard;
          }
          return card;
          
        });
      });
    });
  };
// submit card form --use state id here
  const cardSubmit = (data) =>{
    axios.post(`${baseUrl}/board/${boardId}/cards`, data)
      .then((response)=>{
        setCardData((oldData)=>[...oldData, response.data]);
      })
      .catch((error)=> console.log(error));
  };
  
// delete card
  const toDelete = (id) =>{
    return axios
      .delete(`${baseUrl}/cards/${id}`)
      .then(response=>{
        console.log(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
    };
  
    const deleteCard = (id) =>{
    toDelete(id)
    .then(res =>{
    const newCardList = cardData.filter((ele) => ele.card_id !== id);
    setCardData(newCardList);
    });
  };

  return (
    <section>
      <h1 id='heading' >🌟INSPIRATION BOARD🌟</h1>
    <div className="root">
      <div className="boardsContainer">
        <div className="boardList">
        <BoardList boardSelect = {selectBoard} data={boardData} fetchCards = {fetchCards} />
        </div>
        <div className="selectedBoard"> {selectedBoard}</div>
        <div className="createBoard">< AddBoard handleSubmit= {handleSubmit}/></div>
      </div>
      <div className="cardsContainer"> 
        <div className="cardlist"> 
        <p className='card-heading'>Cards - {selectedBoard}</p>
          <CardList data = {cardData} onLikeCard = {onLikeCard} deleteCard = {deleteCard}/>
        </div>
        <div className="createCard">
          <AddCard cardSubmit={cardSubmit}/>
        </div>
      </div>
   </div>
      
    <footer></footer>
    </section>

  );
}

export default App;

