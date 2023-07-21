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
                    cards = {board.cards}
                    key={board.boardId}
                    onSelectBoard={props.onSelectBoard}
                />
            );
        });
    }; 

    return (
        <section>
            <h2>Board List</h2>
            <ol>{getBoardListJSX(props.boardData)}</ol>
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