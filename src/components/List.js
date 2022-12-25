import { Fragment } from "react";

function List(props) {
  return (
    <Fragment>
      <h3>{props.title}</h3>
      <ul>
        <li>item 1</li>
      </ul>
    </Fragment>
  );
}

export default List;
