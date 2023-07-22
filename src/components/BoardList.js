import React from 'react';
import Board from "./Board";
import PropTypes from "prop-types";
import './BoardList.css'

const BoardList = (props) => {
    const getBoard = props.data.map((board) => {
        return (
            <Board
            key = {board.board_id}
            id = {board.board_id}
            title = {board.title}
            owner = {board.owner}
            clickBoard = {props.boardSelect}
            selectCard = {props.fetchCards}
            deleteBoard = {props.deleteBoard}
            />
        )
    });

    return (
        <section>
            <h2 className='board-heading'>Boards</h2>
            <ul className='board'>{getBoard}</ul>
        </section>
    );
}


BoardList.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired
    }),
    boardSelect: PropTypes.func,
    fetchCards: PropTypes.func,
    deleteBoard:PropTypes.func
};

export default BoardList;