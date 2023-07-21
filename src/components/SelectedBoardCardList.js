import React from 'react';
import PropTypes from 'prop-types';
import CardEntry from './CardEntry';
import './SelectedBoardCardList.css';

const SelectedBoardCardList = (props) => {

    const getCardListJSX = (cards) => {
        return cards.map((card)=>{
            return (
                <div id="card" key={card.cardId}>
                    <CardEntry
                        cardId = {card.cardId}
                        message = {card.message}
                        likesCount = {card.likesCount}
                        key = {card.cardId}
                        onUnregister = {props.onUnregister}
                        onLikeCard = {props.onLikeCard}
                    />
                </div>
            );
        });
    };

    const boardCards = props.cardList ? props.cardList : [];

    return (
        <section>
            <h2>Selected Board Card List</h2>
            <div id="cards-grid">
                {getCardListJSX(boardCards)}
            </div>
        </section>
    );

};

SelectedBoardCardList.propTypes = {
    selectedBoard: PropTypes.shape({
            boardId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        })
};

export default SelectedBoardCardList;