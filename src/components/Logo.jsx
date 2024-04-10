import React from "react";
import fibery from "../assets/fibery.png";
const Logo = () => {
  return (
    <div className="flex items-center justify-center border-b border-gray-200 p-2 m-2">
      <img src={fibery} className="h-36 pt-4 md:pt-0" alt="" />
    </div>
  );
};

export default Logo;
