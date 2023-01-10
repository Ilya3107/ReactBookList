import React from "react";
import Date from "../Date/Date";

function Header({ time }) {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__logo">
          <img src={"assets/image/todo-logo.png"} alt="Logo-Todo" />
        </div>
        <Date time={time} />
      </div>
    </header>
  );
}

export default Header;
