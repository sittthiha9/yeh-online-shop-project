import React from "react";

const NavBar = ({ title }) => {
  return (
    <div className="h-16 p px-8 py-4 w-full fixed block bg-secondary flex-row content-center">
      <div className="text-2xl font-bold text-primary">{title}</div>
    </div>
  );
};

export default NavBar;
