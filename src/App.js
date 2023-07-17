
import './App.css';
import BoardList from './components/BoardList'
import {useState, useEffect}  from 'react'
import axios from 'axios';
import CardList from './components/CardList';
import AddBoard from './components/BoardForm';


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
  const selectBoard = (id) =>{
  
  const selectedItem =  boardData.filter((ele) => ele.board_id === id)
  console.log(selectedItem)

  setSelectedBoard(`${selectedItem[0].title} - ${selectedItem[0].owner}`)
 

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
        console.log('this is oldData: ', oldData)
        return oldData.map((card) => {
          if (card.card_id === id) {
            return updatedCard;
          }
          return card;
          
        });
      });
    });
  };
  console.log(cardData)
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
      <div className="cardscontainer"><CardList data = {cardData} onLikeCard = {onLikeCard}/></div>
        </div>
      
    <footer>This is the footer</footer>
    </section>

  );
}

export default App;

