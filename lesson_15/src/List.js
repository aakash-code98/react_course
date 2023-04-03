import React from "react";
import ListItems from "./ListItems";

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItems key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
