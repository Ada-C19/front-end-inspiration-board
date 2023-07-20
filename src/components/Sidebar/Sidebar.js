import './Sidebar.css';
import Menu from '../Menu/Menu'
//Will hold state of menu on/off; animation


const Sidebar = props => {

  return <div className='Sidebar'>
    <Menu 
      handleBoardSubmit={props.handleBoardSubmit}
      boardId={props.boardId} 
      handleCardSubmit={props.handleCardSubmit}
    />
  </div>
}
export default Sidebar