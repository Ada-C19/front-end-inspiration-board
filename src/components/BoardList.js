

const BoardList = ({ boards, onSelectBoard }) => {
    const handleSelectBoard = (event) => {
      const selectedBoardId = Number(event.target.value);
      const selectedBoard = boards.find((board) => board.board_id === selectedBoardId);
      console.log(selectedBoard)
      console.log(boards)
      console.log(selectedBoardId)
      onSelectBoard(selectedBoard);
    };
  
    return (
      <select onChange={handleSelectBoard}>
        <option value="">Select a board</option>
        {boards.map((board) => (
          <option value={board.board_id} key={board.board_id}>{board.title}</option>
        )
        )
        }
      </select>
    );
  };
  
  export default BoardList;