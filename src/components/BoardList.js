import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import './BoardList.css';

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
            <h3 className='selectBoard'>Select a Board</h3>
            <ul className="board-list">{getBoardListJSX(props.boardData)}</ul>
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