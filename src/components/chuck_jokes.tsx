import Joke from "../joke";
import ChuckJoke from "./chuck_joke";

interface ChuckJokesProps {
  jokes: Joke[];
  jokeType: string;
}

const ChunkJokes: React.FC<ChuckJokesProps> = ({ jokes, jokeType }) => {
  return (
    <div>
      {jokes.map((joke) => (
        <ChuckJoke
          key={`${jokeType}-joke-${joke.id}`}
          id={joke.id}
          joke={joke.joke}
        />
      ))}
    </div>
  );
};

export default ChunkJokes;
