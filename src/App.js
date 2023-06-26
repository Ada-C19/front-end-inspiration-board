import './App.css';
import CardList from './components/CardList';
import cardData from './data/cards.json';

// use ${process.env.REACT_APP_BACKEND_URL} to make API calls


function App() {
  return (
    <div className="App">
      <CardList cards={cardData}/>
    </div>
  );
}

export default App;
