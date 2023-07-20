import React from "react";
import PropTypes from 'prop-types';
import Card from './Card.js';

const CardList = ({ cards, handleLike, deleteCard, sortDirection }) => {
	const getCardListJSX = (cards) => {
		const sortCards = (sortDirection, cards) => {
			if (sortDirection === "Alphabetical") return cards.sort((a, b) => a.message > b.message);
			if (sortDirection === "Likes") return cards.sort((a, b) => a.likesCount < b.likesCount);
			if (sortDirection === "ID") return cards.sort((a, b) => a.id > b.id);
		};
		let sortedCards = sortCards(sortDirection, cards);
		return sortedCards.map((card) => {
			return (
				<Card
					id={card.id}
					key={card.id}
					message={card.message}
					board={card.board}
					likesCount={card.likesCount}
					handleLike={handleLike}
					deleteCard={deleteCard}
				/>
			);
		});
	};

	if (!cards) {
		return null;
	}

	return (
        <div>
            <ul className="card-list">{getCardListJSX(cards)}</ul>
        </div>
	);
};

CardList.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			likesCount: PropTypes.number.isRequired,
		})
	).isRequired,
	handleLike: PropTypes.func,
};

export default CardList;
