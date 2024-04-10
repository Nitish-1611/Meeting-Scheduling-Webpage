import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ShowCalendar = ({ handleDateClick, showDiv }) => {
  // create a new Date object
  let now = new Date();

  // get the current hour (from 0 to 23)
  let hour = now.getHours();

  // get the current minute (from 0 to 59)
  let minute = now.getMinutes();

  const style1 = "w-[400px] mr-4";
  return (
    <div
      className={`${
        showDiv ? style1 : "w-[400px]"
      } h-full pt-2 rounded-xl flex flex-col relative ml-8`}
    >
      <h1 className="font-sans font-semibold text-xl">Select a date & time</h1>
      <Calendar onClickDay={handleDateClick} />
      <div>
        <p className="font-semibold mt-4">Time zone </p>
        <p className="mt-2">🌏 IN, MH, Mumbai ({`${hour}:${minute}`}) </p>
      </div>
    </div>
  );
};

export default ShowCalendar;
