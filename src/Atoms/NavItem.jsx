import React from "react";

const NavItem = ({ name, section }) => {
  const handleClick = () => {
  
    const el = document.querySelector("." + section);

    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div onClick={handleClick} className="btn">
      {name}
    </div>
  );
};

export default NavItem;
