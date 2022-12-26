import { Fragment } from "react";
import ListItem from "./ListItem";

function List(props) {
  let items = props.items.map((item) => <ListItem text={item} />);

  return (
    <Fragment>
      <h3>{props.title}</h3>
      <ul>{items}</ul>
    </Fragment>
  );
}

export default List;
