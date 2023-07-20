import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board';
import NewBoardForm from './NewBoardForm';
import "./BoardList.css";

const BoardList = ({ boards, selectBoard, createBoard, deleteBoard }) => {
    const boardComponents = boards.map(board => {
        return (
            <Board
                boardId={board.board_id}
                title={board.title}
                owner={board.owner}
                selectBoard={selectBoard}
                deleteBoard={deleteBoard}
            />
        )
    })

    return (
        <div>
            <section className='board-titles'>
                {boardComponents}
            </section>
            <section className="board-forms">
                <NewBoardForm id="board-form" createBoard={createBoard} />
            </section>
        </div>
    )
}

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape = ({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired
        })
    )
}
export default BoardList