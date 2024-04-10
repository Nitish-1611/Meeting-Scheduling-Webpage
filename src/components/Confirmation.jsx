import React from "react";
import profile from "../assets/profile.avif";
import { useFormContext } from "../store/FormContextStore";
import { FcGoogle } from "react-icons/fc"
import { FaMicrosoft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { PiGlobeHemisphereEastDuotone } from "react-icons/pi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FcApproval } from "react-icons/fc";

const Confirmation = ({ selectedDate, time }) => {
  const { formData } = useFormContext(); //getting values from store
  const dateString = selectedDate;
  // modifying date string
  const output = dateString.slice(0, 15);
  const timeZone = dateString.slice(25);

  return (
    <div className="flex flex-col  border-solid border-2 border-black rounded-xl shadow-2xl m-8 px-12 md:px-32 md:py-4">
      <div className="flex items-center justify-center">
        <img src={profile} alt="" className="mb-6 w-20 h-20 rounded-full " />
      </div>
      <div className="flex flex-col items-center font-serif font-semibold  ">
        <p className="flex text-2xl mb-2"><FcApproval style={{margin: "0 10px"}}/> You are scheduled</p>
        <p className="font-medium">
          A Calendar Invitation has been sent to {formData.email}
        </p>
      </div>
      <div className="flex flex-col m-2 border border-black rounded-xl error justify-start px-4 py-2">
        <p className="text-2xl font-medium pb-2">Fibery Demo</p>
        <p className="flex m-1"> <FaRegUser style={{margin: "0 10px"}} /> {formData.title}</p>
        <p className="flex m-1"><CiCalendar style={{margin: "0 10px"}}/>${output} at {time}</p>
        <p className="flex m-1"><PiGlobeHemisphereEastDuotone style={{margin: "0 10px"}}/>{timeZone}</p>
        <p className="flex m-1"><GoDeviceCameraVideo style={{margin: "0 10px"}}/>Web Conferencing details to follow.</p>
      </div>
      <hr className="border-b-2 m-2 " />
      <div className="flex flex-col items-center">
        <p className="font-semibold text-sm m-1">
          Schedule your own Meetings with Calendly for free
        </p>
        <p className="font-small text-sm m-1">
          Eliminate the back and forth e-mails for finding time.
        </p>
      </div>
      <div className="flex flex-row">
        <button className="flex flex-row border border-black rounded-xl px-6 py-2 m-2">
        <span><FcGoogle style={{margin: "0 10px"}}/> </span>  Sign up With Google
        </button>
        <button className="flex flex-row border border-black rounded-xl px-6 py-2 m-2">
        <FaMicrosoft style={{margin: "0 10px"}}/> Sign up With Microsoft
        </button>
      </div>
      <div className="flex items-center justify-center">
        <a href="#" className="text-blue-500 ">
          Sign up with work E-mail
        </a>
      </div>
    </div>
  );
};

export default Confirmation;
