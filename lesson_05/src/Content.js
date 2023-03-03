import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Aakash", "Avneet", "Tanya", "Srishti"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  const handleClick = () => {
    console.log("You Clicked It.");
  };
  const handleClick2 = (arg) => {
    console.log(`${arg} was clicked.`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}.</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2("button")}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
