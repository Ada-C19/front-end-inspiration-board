import './BoardList.css';

const BoardList = props => {
  
    // const handleBoardSelect = () => {
    //     console.log('it worked')
    //   };
    console.log(props.selectedBoard);
    const boardItems = props.data.map((board) => {
    return (
      <option 
        key={board.id}>{board.title}
      </option>
    );
  });

  

  return (
    <select onChange={(event) => console.log(event.target.value)}>{boardItems}</select>
    );

};

export default BoardList;