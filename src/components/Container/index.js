import React from "react";
import { NavBar } from "../NavBar";
import "./Container.scss";

export const Container = (props) => {
  return (
    <div className="container">
      <NavBar />
      {props.children}
    </div>
  );
};
