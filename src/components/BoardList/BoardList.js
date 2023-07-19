import './BoardList.css';

const BoardList = (props) => {
  
    // const handleBoardSelect = () => {
    //     console.log('it worked')
    //   };
    const boardItems = props.data.map((board, index) => {
    return (
      <option 
        key={board.id}
        currIndex={index}
        value={board.id}>
          {board.title}
      </option>
    );
  });

  const handleBoardSelect = (event) => {
    const boardId = event.target.value;
    props.selectedBoard(boardId);
    
  };

  return (
    <select onChange={handleBoardSelect}>{boardItems}</select>
    );

};

export default BoardList;