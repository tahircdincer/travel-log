export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.item.imgLink} alt={props.item.location} />
      <div className="card__info">
        <div className="card__info--location">
          <div className="card__info--location--map">
            <p> {props.item.country} </p>
          </div>
          <a href="#"> View on Google Maps </a>
        </div>
        <h2> {props.item.location} </h2>
        <h3> {props.item.date} </h3>
        <p>{props.item.info}</p>
      </div>
    </div>
  );
}
