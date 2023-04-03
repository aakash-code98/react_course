import React from "react";
import Cell from "./Cell";

const Row = ({ item }) => {
  return (
    <tr>
      {/* {console.log(item)}
      {console.log(Object.entries(item))} */}
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

export default Row;
