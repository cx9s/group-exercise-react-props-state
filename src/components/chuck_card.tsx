// 💡 You can import assets like images directly and use them in your components:
import ChuckImage from "../assets/chuck_norris.jpg";

interface ChuckCardProps {
  greetingText: string;
}

const ChuckCard: React.FC<ChuckCardProps> = (props) => (
  <div>
    <h2>{props.greetingText}</h2>

    <img src={ChuckImage} alt="A handsome man" />
  </div>
);

export default ChuckCard;
