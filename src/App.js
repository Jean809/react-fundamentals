import { Fragment } from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
  const guitars = ["Strat", "Les Paul", "Explorer"];
  return (
    <Fragment>
      <Navbar title="Getting Started with State" />
      <div className="container">
        {/*<List title="Guitars" items={guitars} />*/}
      </div>
    </Fragment>
  );
}

export default App;
