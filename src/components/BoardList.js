import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';

const BoardList = (props) => {
    const getBoardListJSX = (boards) => {
        return boards.map((board)=>{
            return (
                <Board
                    boardId = {board.boardId}
                    title = {board.title}
                    owner = {board.owner}
                />
            );
        });
    };

    return (
        <section>
            <h1>Board List</h1>
            <ol>{getBoardListJSX(props.boardData)}</ol>
            <div>
                <p>Selected Board</p>
                {/* Use state to udpate what displays here */}
            </div>
        </section>
    );
};

BoardList.propTypes = {
    boardData: PropTypes.arrayOf(
        PropTypes.shape({
            boardId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default BoardList;