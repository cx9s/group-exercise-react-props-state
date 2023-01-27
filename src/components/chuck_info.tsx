interface ChuckInfoProps {
  whalesSaved: number;
  roundHouseKicks: number;
}

const ChuckInfo: React.FC<ChuckInfoProps> = ({
  whalesSaved,
  roundHouseKicks,
}) => {
  return (
    <div>
      <p>Number of Whales Saved: {whalesSaved}</p>

      <p>Number of Round House Kicks (in the last day): {roundHouseKicks}</p>
    </div>
  );
};

export default ChuckInfo;
