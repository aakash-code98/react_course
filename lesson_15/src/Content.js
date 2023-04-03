import React from "react";
import List from "./List";

const Content = ({ items }) => {
  return (
    <>
      {items.length ? (
        <List items={items} />
      ) : (
        <p className="errorMsgEl">Data does not exists.</p>
      )}
    </>
  );
};

export default Content;
