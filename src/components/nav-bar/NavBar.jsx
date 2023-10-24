import React from "react";

const NavBar = ({ title }) => {
  return (
    <div className="h-16 p px-8 py-4 w-full fixed block bg-secondary dark:bg-secondary2 flex-row content-center">
      <div className="text-xl text font-bold text-primary dark:text-primary2">{title}</div>
    </div>
  );
};

export default NavBar;
