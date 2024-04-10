import React from "react";

const Info = () => {
  return (
    <div className="mt-4 h-[250px] relative p-3 mr-2">
      <h3 className="text-3cloxl font-bold text-stone-700 mb-4">Fibery Demo</h3>
      <p className="text-base text-gray-700">
        🕔 45 mins
        <br />
        Book a meeting with our fibery team. Talk to a real person about how to
        get your processes set up with us 🦄 or not 💩
      </p>
      <a href="#" className="absolute bottom-0 text-blue-500 ">
        Cookie Settings
      </a>
    </div>
  );
};

export default Info;
