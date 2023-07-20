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
                    onClickLike={props.onClickLike}
                />
            );
        });
    };

    const boardCards = props.cardList ? props.cardList : [];

    return (
        <section>
            <h1>Selected Board Card List</h1>
            <ol>{getCardListJSX(boardCards)}</ol>
        </section>
    );

};

// create propTypes


export default SelectedBoardCardList;