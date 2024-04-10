import React, { useRef, useState } from "react";
import { useFormContext } from "../store/FormContextStore";

const MeetingForm = ({setConfirmation}) => {
  const { updateFormData } = useFormContext();
  const [allchecked, setAllChecked] = useState([]);

  
  const titleElement = useRef();
  const emailElement = useRef();
  const guestEmailElement = useRef();
  const skillsElement = useRef();
  const noteElement = useRef();
  const fiberyNameElement = useRef();
  

  const values = [
    "🥕 Myself",
    "👩🏻‍🤝‍🧑🏼 <10 people",
    "🦄 10-50 people",
    "🦅 50+ people",
  ];

  const skills = [
    "⛰ Leadership",
    "🦉 Consulting",
    "😀 Product Management",
    "🎨 Design",
    "💻 Engineering",
    "🎣 Sales",
    "💣 Marketing",
    "💎 Human Resource",
    "📚 Education",
    "❓ Something Else",
  ];
  

  ////function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleElement.current.value;
    const email = emailElement.current.value;
    const guestEmail = guestEmailElement.current.value;
    const note = noteElement.current.value;
    const fiberyName = fiberyNameElement.current.value;
    updateFormData({ title, email });
    
    
    
    
    // Reset form fields
    titleElement.current.value = "";
    emailElement.current.value = "";
    guestEmailElement.current.value = "";
    noteElement.current.value = "";
    fiberyNameElement.current.value = "";
    
    // Set confirmation state - This will trigger the Confirmation Component
    setConfirmation(true);
  };

  
  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="grid m-2">
          <label htmlFor="userId" className="font-semibold">
            Enter Name
          </label>
          <input
            type="text"
            ref={titleElement}
            className="m-2 border border-black p-1 rounded-lg"
            id="userId"
            placeholder="Enter your Full Name"
            required
          />
        </div>

        <div className="grid col-auto m-2">
          <label htmlFor="title" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            ref={emailElement}
            className="m-2 border border-black p-1 rounded-lg"
            placeholder="Enter your E-mail"
            required
          />
        </div>

        <div className="grid col-auto m-2">
          
            <div className="grid ">
              <label htmlFor="title" className="font-semibold">
                Guest Email(s)
              </label>
              <textarea
                type="email"
                rows="3"
                ref={guestEmailElement}
                className="m-2 border border-black p-1 rounded-lg"
                id="body"
              />
            </div>
        </div>

        <div className="grid place-content-start m-4">
          <label className="font-semibold">I want Fibery to work for:</label>
          <div className="m-2 flex flex-col">
            {values.map((item, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  className=""
                  value={item}
                  type="checkbox"
                  onChange={handleChange}
                />
                <span className="ml-2">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid place-content-start m-4">
          <label className="font-semibold">You are more about: </label>
          <div className="m-2 flex flex-col">
            {skills.map((item, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  ref={skillsElement}
                  className=""
                  value={item}
                  type="checkbox"
                  onChange={handleChange}
                />
                <span className="ml-2">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid m-2">
          <label htmlFor="body" className="font-semibold">
            Please share anything that will help prepare for our meeting
          </label>
          <textarea
            rows="4"
            ref={noteElement}
            className="m-2 border border-black p-1 rounded-lg"
            id="body"
          />
        </div>
        <div className="grid m-2">
          <label htmlFor="userId" className="font-semibold">
            Please share with us the name of your Fibery workspace
          </label>
          <input
            type="text"
            ref={fiberyNameElement}
            className="m-2 border border-black p-1 rounded-lg"
            id="userId"
            required
          />
        </div>
        <button
          type="submit"
          className="border border-black bg-[#0073ff] p-2 rounded-2xl w-auto m-2 text-white"
        >
          Schedule Event
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;