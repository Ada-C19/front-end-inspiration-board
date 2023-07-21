import React from 'react';
import PropTypes from 'prop-types';
import CardEntry from './CardEntry';
import './SelectedBoardCardList.css';

const SelectedBoardCardList = (props) => {

    const getCardListJSX = (cards) => {
        return cards.map((card)=>{
            return (
                <CardEntry
                    cardId = {card.cardId}
                    message = {card.message}
                    likesCount = {card.likesCount}
                    key = {card.cardId}
                    onUnregister = {props.onUnregister}
                    onLikeCard = {props.onLikeCard}
                />
            );
        });
    };

    const boardCards = props.cardList ? props.cardList : [];

    return (
        <section className="cards">
            <h1>Selected Board Card List</h1>
            <ol>{getCardListJSX(boardCards)}</ol>
        </section>
    );

};

SelectedBoardCardList.propTypes = {
    selectedBoard: PropTypes.arrayOf(
        PropTypes.shape({
            boardId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        })
    ),
}

export default SelectedBoardCardList;