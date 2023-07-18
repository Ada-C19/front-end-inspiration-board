import './Sidebar.css';
import Menu from '../Menu/Menu'
//Will hold state of menu on/off; animation


const Sidebar = props => {
  return <div>
    <Menu 
      handleBoardSubmit={props.handleBoardSubmit}
    />
  </div>
}
export default Sidebar