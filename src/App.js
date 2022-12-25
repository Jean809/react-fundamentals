import { Fragment } from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
  const guitars = ["Strat", "Les Paul", "Explorer"];
  return (
    <Fragment>
      <Navbar title="CSS and Separating JS and JSX" />
      <div className="container">
        <List title="Guitars" items={guitars} />
      </div>
    </Fragment>
  );
}

export default App;
