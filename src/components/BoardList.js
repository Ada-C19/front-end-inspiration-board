import React from 'react';

const BoardList = (props) => {
    return (
        <div onClick={() => props.onSelectBoard(props.board)}>
            {props.board.title} by {props.board.owner}
        </div>
    );
};


export default BoardList;

//we need a list of boards by title to appear in a box under a board header
// Boards will be displayed as a list
//ITS JUST THEIR TITLES NOT COMPONENTS

// Action:
//when clicking a title in board

// Effects: 
// highlight title in the boards list
// changes title in CardsList component // the board title will appear in the "cards for" header
//the new card form will appear
// its corresponding cards will appear (CardList component)

// Note:
//we never display more than one board at a time 

{/* 
    const Board = (props) => {
    return (<div onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</div>);
};

export default Board;


onBoardSelect: what's going to change your state that changes your selected Board

const [ selectedBoard, setSelectedBoard ] = useState('') <- we don't want this to render visibily
to the user until a selection is made

*/}



