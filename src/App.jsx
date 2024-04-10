import React, { useState } from "react";
import Logo from "./components/Logo";
import Info from "./components/Info";
import MeetingForm from "./components/MeetingForm";
import Header from "./components/Header";
import ButtonContainer from "./components/ButtonContainer";
import ShowCalendar from "./components/ShowCalendar";
import Confirmation from "./components/Confirmation";
import { FormProvider } from "./store/FormContextStore";

function App() {
  const [selectedDate, setSelectedDate] = useState(null); // date which is selected by user will be displayed in confirmation window
  const [showDiv, setShowDiv] = useState(false); // This toggles ButtonContainer component on click of calendar day
  const [time, setTime] = useState(""); // takes time on button click
  const [showCalendar, setShowCalendar] = useState(true);
  const [confirmation, setConfirmation] = useState(false); // toggles confirmation window on successful form submission
  const style = "px-24";

  //function to handle event when user clicks on a day of calendar
  const handleDateClick = (date) => {
    const newDate = date.toString();
    setShowDiv(true);
    setSelectedDate(newDate);
  };

  //function to handle event when user selects time from list
  const handleTimeButton = (e) => {
    setTime(e.target.innerText);
    setShowDiv(false);
    setShowCalendar(false);
  };

  return (
    <>
      <Header />
      <FormProvider>
        {confirmation ? (
          <Confirmation selectedDate={selectedDate} time={time} />
        ) : (
          <div
            className={`md:flex items-center ${
              showDiv ? style : "px-8 pt-1"
            } border-solid border-2 border-black rounded-xl shadow-2xl`}
          >
            <div className="w-96 py-8 text-left rounded-xl">
              <Logo />
              <Info />
            </div>

            {showCalendar ? (
              <>
                <ShowCalendar
                  handleDateClick={handleDateClick}
                  showDiv={showDiv}
                />
                <div>
                  {showDiv && (
                    <ButtonContainer handleTimeButton={handleTimeButton} />
                  )}
                </div>
              </>
            ) : (
              <MeetingForm setConfirmation={setConfirmation} />
            )}
          </div>
        )}
      </FormProvider>
    </>
  );
}

export default App;
