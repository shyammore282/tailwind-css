import React from "react";
import { nav } from "./data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between gap-3">
      {nav.map((ele) => {
        return (
          <div className=" bg-slate-500 mx-5 px-5" key={ele.id}>
            <Link to={ele.path}>{ele.text}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
