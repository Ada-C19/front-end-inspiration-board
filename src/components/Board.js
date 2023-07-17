const Board = props => {

  return(
  <div>
    <p>hello board :^)</p>
    <p>board id: {props.board_id}</p>
    <p>owner: {props.owner}</p>
    <p>title: {props.title}</p>

    {/* <p><Card /></p> */}

  </div>
  )
};

export default Board;