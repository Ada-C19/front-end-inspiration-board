import React from "react";
import PropTypes from 'prop-types';
import TrashIcon from "./TrashIcon";
import CardList from "./CardList";
import NewCardForm from "./NewCardForm";
import './Board.css';

const Board = ({
    board_id,
    title,
    owner,
    cards,
    deleteBoard,
    handleLike,
    deleteCard,
    cardDisplaySortDirection,
    handleSubmitCard,
    addCard,
}) => {
        
    // delete board API call not working, throws error.
    const handleDeleteBoard = () => {
        deleteBoard(board_id);
    };

    return (
        <div className="board">
                    <h1 className="h1-board">{title}</h1>
                    <p>Created By: {owner}</p>
                    <TrashIcon onClick={() => handleDeleteBoard()} />
                    <CardList
                        cards={cards}
                        handleLike={handleLike}
                        deleteCard={deleteCard}
                        sortDirection={cardDisplaySortDirection}
                    />
                    <NewCardForm addCard={handleSubmitCard} />
        </div>
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    handleLike: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    cardDisplaySortDirection: PropTypes.string.isRequired,
    selectedBoardId: PropTypes.number,
    handleSubmitCard: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
};

export default Board;