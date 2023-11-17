import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardEntry from './CardEntry';
import './SelectedBoardCardList.css';

const SelectedBoardCardList = (props) => {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('cardId');

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
                        onUpdateMessage = {props.onUpdateMessage}
                    />
                </div>
            );
        });
    };

    useEffect(() => {
    const sortArray = (type) => {
        const types = {
            cardId : 'cardId',
            message : 'message',
            likesCount : 'likesCount',
        };
        const sortProperty = types[type];
        const sorted = [...props.cardList].sort((a, b) => {
            if (typeof a[sortProperty] === 'string') {
                return a[sortProperty].localeCompare(b[sortProperty]);
            } else {
                return a[sortProperty] - b[sortProperty];
            }
        });
        console.log(sorted);
        setData(sorted);
    };
        sortArray(sortType);
    }, [sortType, props.cardList]);

    const boardCards = data ? data : [];

    return (
        <section>
            <div className="sort-cards">
                {data.length > 0 &&
                (<select onChange={(e) => setSortType(e.target.value)}>
                    {/* <option value="cardId">ID</option> */}
                    <option value="message">alphabetically</option>
                    <option value="likesCount">likes</option>
                </select>)}
            </div>
            <div className="card-list-container">
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