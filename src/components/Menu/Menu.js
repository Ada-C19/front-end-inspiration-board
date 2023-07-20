import NewBoardForm from '../NewBoardForm';
import NewCardForm from '../NewCardForm';
import './Menu.css';


// Will hold forms for new board, new card


const Menu = props => {

  return (
  <div>
      <NewBoardForm 
        handleBoardSubmit={props.handleBoardSubmit}
      />
      <NewCardForm
        boardId={props.boardId} 
        handleCardSubmit={props.handleCardSubmit}
      />
  </div>
  )
}
export default Menu