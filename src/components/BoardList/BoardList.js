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
        index={index}
        id={board.id}>{board.title}
      </option>
    );
  });

  

  return (
    <select onChange={(event) => console.log(event.target[1].id)}>{boardItems}</select>
    );

};

export default BoardList;