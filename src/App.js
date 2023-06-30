import './App.css';
import BoardContainer from './components/BoardContainer';
import CardContainer from './components/CardContainer';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Inspiration Board
      </header>
      <main>
        <BoardContainer></BoardContainer>
        <CardContainer></CardContainer>
      </main>
    </div>
  );
}

export default App;
