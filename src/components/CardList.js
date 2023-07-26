const CardList = ({cards}) => {

return (
    <div>
        {cards.map((card) => (
        <div> {card.message} </div>
        )
        )
        }
    </div>
    );
};

export default CardList;
