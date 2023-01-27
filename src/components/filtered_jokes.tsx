import Joke from "../joke";
import ChuckJoke from "./chuck_joke";

interface ChuckJokesProps {
  jokes: Joke[];
  condition: string;
}

const FilteredJokes: React.FC<ChuckJokesProps> = ({ jokes, condition }) => {
  return (
    <>
      <h2>Filtered Jokes: "{condition}"</h2>
      <div>
        {jokes.map((joke) => {
          if (eval(condition)) {
            return <ChuckJoke id={joke.id} joke={joke.joke} />;
          }
        })}
      </div>
    </>
  );
};

export default FilteredJokes;
