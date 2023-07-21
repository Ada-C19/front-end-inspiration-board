import './BoardList.css';

const BoardList = (props) => {
  
    const boardItems = props.data.map((board, index) => {
    return (
      <option 
        key={board.id}
        value={board.id}>
          {board.title}
      </option>
    );
  });

  const handleBoardSelect = (event) => {
    const boardId = event.target.value;
    props.setSelectedBoard(boardId);
  };

  return (
    <div className="sort__dropdown">
      <label htmlFor="board-select">Select Board: </label>
      <select id="board-select" onChange={handleBoardSelect}>
        <option>Select a board</option>
        {boardItems}
      </select>
    </div>
    );
};

export default BoardList;