import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="input">Enter Color Name.</label>
      <input
        autoFocus
        type="text"
        name="input"
        placeholder="Enter color name."
        id="input"
        tabIndex={0}
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
      type="button"
      onClick={() => setIsDarkText(!isDarkText)}
      >Toggle Text Color</button>
    </form>
  );
};

export default Input;
