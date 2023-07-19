import './BoardList.css';

const BoardList = props => {
  const boardItems = props.data.map((board) => {
    return (
      <option key={board.id}>{board.title}</option>
    );
  });

  return (
    <select>{boardItems}</select>
    );

};

export default BoardList;