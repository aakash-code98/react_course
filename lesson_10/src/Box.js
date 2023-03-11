import React from "react";

const Box = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="box"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Box.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Box;
