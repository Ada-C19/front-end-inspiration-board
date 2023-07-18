
import './App.css';
import BoardList from './components/BoardList'
import {useState, useEffect}  from 'react'
import axios from 'axios';
import CardList from './components/CardList';
import AddBoard from './components/BoardForm';
import AddCard from './components/CardForm'

const baseUrl = 'https://inspiration-board-api-m6he.onrender.com';

const getAllBoards = () =>{
  return axios.get(`${baseUrl}/board`)
  .then((response)=>{
      return response.data;
})
  .catch((error)=>{
      console.log(error);
});

}

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


  const [selectedBoard, setSelectedBoard]= useState("Select a Board")
  const [boardId, setBoardId] = useState(0)
  const selectBoard = (id) =>{
  
  const selectedItem =  boardData.filter((ele) => ele.board_id === id)


  setSelectedBoard(`${selectedItem[0].title} - ${selectedItem[0].owner}`)
  setBoardId(id)

  }

  const [cardData, setCardData] = useState([]);
  const fetchCards = (id) =>{
    getCards(id)
    .then((response) =>{
      setCardData(response)
   
    }

    )
  }

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
          <CardList data = {cardData} onLikeCard = {onLikeCard}/>
        </div>
        <div className="createCard">
          <AddCard/>
        </div>
      </div>
   </div>
      
    <footer></footer>
    </section>

  );
}

export default App;

