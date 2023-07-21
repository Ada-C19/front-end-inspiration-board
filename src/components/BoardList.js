import React from 'react';

const BoardList = (props) => {
    return (
        <div onClick={() => props.onSelectBoard(props.board)}>
            {props.board.title} by {props.board.owner}
        </div>
    );
};

export default BoardList;