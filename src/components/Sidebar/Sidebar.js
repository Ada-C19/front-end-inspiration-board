import './Sidebar.css';
import Menu from '../Menu/Menu'
//Will hold state of menu on/off; animation


const Sidebar = props => {

  return <div className='Sidebar'>
    <Menu
      boardId={props.boardId} 
      handleBoardSubmit={props.handleBoardSubmit}
      handleCardSubmit={props.handleCardSubmit}
    />
  </div>
}
export default Sidebar