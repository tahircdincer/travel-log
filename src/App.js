import "./App.css";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  const cardsInfo = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div>
      <Navbar />
      <div className="cards__container">{cardsInfo}</div>
    </div>
  );
}

export default App;
