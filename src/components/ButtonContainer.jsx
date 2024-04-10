import React from "react";

const ButtonContainer = ({ handleTimeButton }) => {
  const btnArray = [
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
  ];
  return (
    <div className="h-96 w-2 m-2 ">
      <p className="font-semibold">Select Time </p>
      {/* Mapping btnArray values to list */}
      {btnArray.map((item, index) => (
        <button
          className="rounded-lg border border-blue-300 p-2 m-1 w-20 text-blue-600 font-medium hover:bg-[#6f48eb] hover:text-white"
          key={index}
          onClick={handleTimeButton}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
