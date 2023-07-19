import './BoardList.css';

const BoardList = props => {
  const boardItems = props.data.map((board) => {
    return (
      <li key={board.id}>{board.title}</li>
    );
  });

  return (boardItems);

};

export default BoardList;