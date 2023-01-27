const ChuckJoke: React.FC<{ id: number; joke: string }> = ({ id, joke }) => {
  return (
    <p>
      {id}. {joke}
    </p>
  );
};

export default ChuckJoke;
