import React from 'react';
import PropTypes from 'prop-types';
import "./Board.css"

const Board = ({ boardId, title, owner, selectBoard, deleteBoard }) => {

    return (
        <div className="board">
            <section>
                <h1 onClick={() => selectBoard(boardId)}>{title}</h1>
                <p>by: {owner}</p>
            </section>
            <section>
                <button
                    type="delete"
                    className="deleteBoard"
                    onClick={() => deleteBoard(boardId)}
                >
                    X
                </button>
            </section>
        </div>
    )
};

Board.propTypes = {
    boardId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape = ({
            cardId: PropTypes.number.isRequired,
            messsage: PropTypes.string.isRequired,
            likeCount: PropTypes.string.isRequired,
            board: PropTypes.string.isRequired,
            boardId: PropTypes.number.isRequired
        })
    ),
    createBoard: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired
}

export default Board