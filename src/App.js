import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';
const DEFAULT_BOARD_ID = 2; // TODO: Remove 

function App() {

  const handleCardSumbit = (newCardFormProps) => {
    // Handle UI after card has been created from the form
    return axios
      .post( 
        `${BASE_URL}/boards/${newCardFormProps.boardId}/cards`, 
        { message: newCardFormProps.message },
      )
      .then((response) => {
        console.log(`Assigned card to a boardId=${newCardFormProps.boardId}. Response: ${response}`);
        // UI change
      })
      .catch((error) => {
        console.log(`Failed to assign card to board. Error: ${error}`)
      })
  }

  return (
    <div className="App">
      <p>hello world :)</p>
      {/* <Board board_id={1} owner={"Abby"} title={"tamagotchis i have loved"}/> */}
      <NewCardForm boardId={DEFAULT_BOARD_ID} handleCardSumbit={handleCardSumbit}/>
    </div>
  );
}

export default App;
