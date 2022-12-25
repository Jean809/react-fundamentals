import { Fragment } from "react";

function List(props) {
  let items = props.items.map((item) => <li>{item}</li>);

  return (
    <Fragment>
      <h3>{props.title}</h3>
      <ul>{items}</ul>
    </Fragment>
  );
}

export default List;
