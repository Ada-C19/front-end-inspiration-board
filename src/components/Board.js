import { useParams } from "react-router-dom"

const Board = (prop) => {
  const { id } = useParams()
  return (
    <>
      <section>
        Board {id} section
      </section>
    </>
  );
}

export default Board;
import CardList from "./CardList";

const Board = () => {
	return (
		<div>
            <h1> Board Name</h1>
            <h2> Board Description</h2>
			<button>Create a Card</button>
			<CardList />
		</div>
	);
};

export default Board;
