import React from "react";

const ListItems = ({ item }) => {
  return <li className="listItem">{JSON.stringify(item)}</li>;
};

export default ListItems;
