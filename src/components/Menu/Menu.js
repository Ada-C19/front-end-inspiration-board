import NewBoardForm from '../NewBoardForm';
import './Menu.css';


// Will hold forms for new board, new card


const Menu = props => {
  return <div>
    <NewBoardForm 
      handleBoardSubmit={props.handleBoardSubmit}
    />
  </div>
}
export default Menu