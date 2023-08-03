import CardComponent from "../cardComponent";

export default function CardsContainer({ games = [] }) {
  return (
    <div className="d-flex flex-wrap">
      {games.map((game) => (
        <CardComponent key={game._id} game={game} />
      ))}
    </div>
  );
}
