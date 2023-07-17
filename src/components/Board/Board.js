import './Board.css';
import Card from '../Card/Card';

const Board = props => {

  return(
    <div>
      <p>hello board :^)</p>
      <p>board id: {props.board_id}</p>
      <p>owner: {props.owner}</p>
      <p>title: {props.title}</p>

      <p><Card card_id={1} likesCount={3} message={"i love tamagotchi"} /></p>
      <p><Card card_id={2} likesCount={999999} message={"hatsune miku tamagotchi"} /></p>

    </div>
  )
};

export default Board;