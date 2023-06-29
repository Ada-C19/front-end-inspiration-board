
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
    <div className="App">
      <div className="root">
        <div className="page_container">
          <div className="content_container"></div>
          <footer/>
        </div>
      </div>

      <Board data={data} />
    </div>
    </section>
  );
}

export default App;
