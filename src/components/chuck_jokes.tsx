import Joke from "../joke";
import ChuckJoke from "./chuck_joke";

interface ChuckJokesProps {
  jokes: Joke[];
}

const ChunkJokes: React.FC<ChuckJokesProps> = ({ jokes }) => {
  return (
    <div>
      {jokes.map((joke) => (
        <ChuckJoke id={joke.id} joke={joke.joke} />
      ))}
    </div>
  );
};

export default ChunkJokes;
