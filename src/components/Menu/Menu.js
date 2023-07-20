import NewBoardForm from '../NewBoardForm';
import NewCardForm from '../NewCardForm';
import './Menu.css';

const Menu = props => {

  return (
  <div>
      <NewBoardForm 
        handleBoardSubmit={props.handleBoardSubmit}
      />
      <NewCardForm
        handleCardSubmit={props.handleCardSubmit}
      />
  </div>
  )
}
export default Menu