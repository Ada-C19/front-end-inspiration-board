import './App.css';
import BoardList from './components/BoardList';
import SelectedBoard from './components/SelectedBoard';
import NewBoardForm from './components/NewBoardForm';
import CardEntry from './components/CardEntry';
import SelectedBoardCardList from './components/SelectedBoardCardList';
import NewCardForm from './components/NewCardForm';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Inspiration Board
      </header>
      <main>
        <section>
          <BoardList></BoardList>
          <SelectedBoard></SelectedBoard>
          <NewBoardForm></NewBoardForm>
        </section>
        <section>
          <SelectedBoardCardList></SelectedBoardCardList>
          <NewCardForm></NewCardForm>
        </section>
      </main>
    </div>
  );
}

export default App;
