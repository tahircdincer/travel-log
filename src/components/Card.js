export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img
        src="https://images.pexels.com/photos/14702017/pexels-photo-14702017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Oxford"
      />
      <div className="card__info">
        <div className="card__info--location">
          <div className="card__info--location--map">
            <p> England </p>
          </div>
          <a href="#"> View on Google Maps </a>
        </div>
        <h2> Oxford Street </h2>
        <h3> 2013 </h3>
        <p>
          Oxford Street is a major road in the City of Westminster. It marks the
          notional boundary between the areas of Fitzrovia and Marylebone to the
          north, with Soho and Mayfair to its immediate south.
        </p>
      </div>
    </div>
  );
}
