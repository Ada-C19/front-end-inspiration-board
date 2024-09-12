import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardEntry from "./CardEntry";
import "./SelectedBoardCardList.css";

const SelectedBoardCardList = (props) => {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState("cardId");

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
            cardId : "cardId",
            message : "message",
            likesCount : "likesCount",
        };
        const sortProperty = types[type];
        
        const sorted = [...props.cardList].sort((a, b) => {
            if (typeof a[sortProperty] === "string") {
                return a[sortProperty].localeCompare(b[sortProperty]);
            } else {
                return a[sortProperty] - b[sortProperty];
            }
        });
        setData(sorted);
    };
        sortArray(sortType);
    }, [sortType, props.cardList]);

    const boardCards = data ? data : [];

    return (
        <section>
            <div className="sort-cards">
                {data.length > 0 &&
                (<label htmlFor="sort-by">Sort A-Z By:</label>)}
                {data.length > 0 &&
                (<div className="select-container">
                <select 
                id="sort-by"
                onChange={(e) => setSortType(e.target.value)}>
                    <option>please choose</option>
                    <option value="message">message</option>
                    <option value="likesCount">likes</option>
                </select>
                </div>)}
            </div>
            <div className="card-list-container">
                {getCardListJSX(boardCards)}
            </div>
            <div className="board-owner-container">
            <p className="board-owner">
                {data.length > 0 ? `Owner: ${props.selectedBoard.owner}`: ""}
            </p>
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