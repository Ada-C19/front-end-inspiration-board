import './BoardList.css';

const BoardList = props => {
  
    // const handleBoardSelect = () => {
    //     console.log('it worked')
    //   };
    console.log(props.selectedBoard);
    const boardItems = props.data.map((board, index) => {
    return (
      <option 
        key={board.id}
        
        id={board.id}>
          {board.title}{index}
      </option>
    );
  });

  const handleBoardSelect = (event) => {
    // console.log(event.target[1].id);
    console.log('does this work??');
  };

  return (
    <select onChange={handleBoardSelect}>{boardItems}</select>
    );

};

export default BoardList;