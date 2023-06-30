
import './App.css';
import BoardList from './components/BoardList'
import {useState, useEffect}  from 'react'
import axios from 'axios';


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
    console.log(id)
  const selectedItem =  boardData.filter((ele) => ele.board_id === id)
  console.log(selectedItem)

  setSelectedBoard(`${selectedItem[0].title} - ${selectedItem[0].owner}`)
 

  }


  return (
    <section>
      <h1>🌟INSPIRATION BOARD🌟</h1>
    <div className="root">
      <div className="boardsContainer">
        <div className="boardList">
        <BoardList boardSelect = {selectBoard} data={boardData} />
        </div>
        <div className="selectedBoard"> {selectedBoard}</div>
        <div className="createBoard">hellothere </div>
      </div>
      <div className="cardsContainer">hola</div>
        </div>
      
    <footer>This is the footer</footer>
    </section>

  );
}

export default App;
