import { Fragment } from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <Fragment>
      <Navbar title="Using Fragments" />
      <div className="bg-dark"></div>
    </Fragment>
  );
}

export default App;
