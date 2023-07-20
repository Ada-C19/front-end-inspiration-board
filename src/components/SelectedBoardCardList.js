import React from 'react';
import PropTypes from 'prop-types';
import CardEntry from './CardEntry';


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

    return (
        <section>
            <h1>Selected Board Card List</h1>
            <ol>{getCardListJSX(props.cardList)}</ol>
        </section>
    );

};

// create propTypes


export default SelectedBoardCardList;