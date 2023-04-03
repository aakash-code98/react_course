import React from "react";
import Button from "./Button.js";

const Header = ({ reqType, setReqType }) => {
  return (
    <nav className="navBar">
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </nav>
  );
};

export default Header;
