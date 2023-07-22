import './Sidebar.css';
import Menu from '../Menu/Menu'

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