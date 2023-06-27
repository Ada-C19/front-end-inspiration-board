// change card list to take in an argument (board id)
// add a selector to App that toggles which boards display
// card list only gets cards for selected board

import CardList from './components/CardList';
import cardData from './data/cards.json';

//cardlist should fetch cards with specific board_id
//boardlistJSX (own component?) - radio form in app to choose what board to display
//cardlist only produces cards === board.id
//board.id needs to be saved in state

const Board = () => {
    return (
        <div>board goes here!</div>
    );
};

export default Board;