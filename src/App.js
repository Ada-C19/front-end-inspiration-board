
import './App.css';
import Board from './components/Board'

const data = [
  {
    id:1,
    title:"the team",
    owner:"ADA",
  },
  {
    id:2,
    title:"homedepot",
    owner:"tools",
  },
  {
    id:3,
    title:"house",
    owner:"parents",
  }
]

function App() {
  return (
    <div className="App">
     
      <Board data = {data}/>
    </div>
  );
}

export default App;
