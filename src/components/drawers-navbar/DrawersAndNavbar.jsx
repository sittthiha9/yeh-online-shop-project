import React from "react";
import Drawers from "@/components/drawers/Drawers";
import NavBar from "@/components/nav-bar/NavBar";

const DrawersAndNavbar = ({children, title}) => {
  return (
    <div className="flex-1 flex">
      <Drawers />
      <div className="flex-1 flex-col">
        <NavBar title={title}/>
        {children}
      </div>
    </div>
  );
};

export default DrawersAndNavbar;
