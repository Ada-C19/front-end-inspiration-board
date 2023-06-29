
import './App.css';
import BoardList from './components/BoardList'
import {useState, useEffect}  from 'react'

const data = [
  {
    id: 1,
    title: "the team",
    owner: "ADA",
  },
  {
    id: 2,
    title: "homedepot",
    owner: "tools",
  },
  {
    id: 3,
    title: "house",
    owner: "parents",
  }
]

function App() {
  const [selectedBoard, setSelectedBoard]= useState("sddf")
  const selectBoard = (id) =>{
  const selectedItem =  data.filter((ele) => ele.id === id)
  console.log(selectedItem)
  setSelectedBoard(selectedItem)
 

  }


  return (
    <section>
      <h1>🌟INSPIRATION BOARD🌟</h1>
    <div className="root">
      <div className="boardsContainer">
        <div className="boardList">
        <BoardList boardSelect = {selectBoard} data={data} />
        </div>
        <div className="selectedBoard"> {selectedBoard[0].title}, .. {selectedBoard[0].owner}</div>
        <div className="createBoard">hellothere </div>
      </div>
      <div className="cardscontainer">hola</div>
        </div>
      
    <footer>This is the footer</footer>
    </section>

  );
}

export default App;
