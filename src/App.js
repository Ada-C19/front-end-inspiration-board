
import './App.css';
import Board from './components/Board'

const data = [
  {
    id: 1,
    title: "the team",
    owner: "ADA",
  },
  {
    id: 2,
    title: "homedepot",
    owner: "tools",
  },
  {
    id: 3,
    title: "house",
    owner: "parents",
  }
]

function App() {
  return (
    <section>
      <h1>🌟INSPIRATION BOARD🌟</h1>
    <div className="root">
      <div className="boardsContainer">
        <div className="boardList">
        <Board data={data} />
        </div>
        <div className="selectedBoard">whatsup </div>
        <div className="createBoard">hellothere </div>
      </div>
      <div className="cardscontainer">hola</div>
        </div>
      
    <footer>This is the footer</footer>
    </section>

  );
}

export default App;
