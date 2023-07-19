import './BoardList.css';


const BoardList = props => {
  const boardItems = props.data.map((board) => {
    return (
      <li>{board.title}</li>
    );
  });

  return (boardItems);

};

export default BoardList;