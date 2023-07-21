import NewBoardForm from '../NewBoardForm/NewBoardForm';
import NewCardForm from '../NewCardForm/NewCardForm';

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