import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;  //generating unique Card for each monster
      })}
    </div>
  );
};
export default CardList;
