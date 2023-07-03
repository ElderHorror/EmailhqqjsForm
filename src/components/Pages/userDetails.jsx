import React, { useState, useEffect } from "react";
import UserInput from "../user-input";
import Dropdown from "../dropdown2";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import './button-animation.css'
import { FcCheckmark } from "react-icons/fc";

function UserDetails({ formData, setFormData }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const drop = [
    {
      title: "Reachability",
      options: [
        "By E-mail At Any Time",
        "By Phone At Any Time",
        "By Phone From 8 Noon to 12 p.m.",
        "By Phone from 12 Noon to 18 p.m",
        "By Phone After 18 p.m",
      ],
    },
  ];

  const param = [
    {
      id: 1,
      type: "text",
      placeholder: "Your first and last name",
      title: "Full Name",
      emote: '👋',
    },
    {
      id: 2,
      type: "email",
      placeholder: "Your e-mail address",
      title: "Email",
       emote: '✉️',
    },
    {
      id: 3,
      type: "tel",
      placeholder: "Your phone number (for enquiries only)",
      title: "Phone Number",
       emote: '📞',
    },
  ];

  const [inputValues, setInputValues] = useState({});
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleInputChange = (id, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isTermsChecked) {
      // If terms and conditions checkbox is not checked, show warning or prevent form submission
      console.log("Terms and conditions checkbox must be checked");
      return;
    }
    if (formData && formData.options) {
      const userDetail = param.map((input) => ({
        title: input.title,
        content: inputValues[input.id] || "",
      }));
  
      const updatedUserDetails = [
        ...formData.options.userDetails,
        ...userDetail,
        { title: drop[0].title, content: selectedOption }, // Add the selected dropdown value
      ];
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        options: {
          ...prevFormData.options,
          userDetails: updatedUserDetails,
        },
      }));
    }

    
    sendEmail(event, formData);
    navigate("/UserSubmit");
  };
  

  const sendEmail = (e, formData) => {
    e.preventDefault();

    

    // Convert options arrays to formatted strings
    const { jobOptions, expOptions, userDetails } = formData.options;

    // Convert options arrays to formatted strings
    const formattedJobOptions = jobOptions
      .map((option) => `- ${option}`)
      .join("\n");
    const formattedExpOptions = expOptions
      .map((option) => {
        const key = Object.keys(option)[0];
        return `- ${key}: ${option[key]}`;
      })
      .join("\n");
    // Convert userDetails object to a formatted string
    const formattedUserDetails = userDetails
      .map((detail) => `${detail.title}: ${detail.content}`)
      .join("\n");

    const templateParams = {
      from_name: '',
      to_name: '',
      jobOptions: formattedJobOptions,
      expOptions: formattedExpOptions, // You can include the formatted options here
      userDetails: formattedUserDetails,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_ID"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const createUserInput = (inp) => (
    <UserInput
    emote={inp.emote}
      key={inp.id}
      id={inp.id}
      type={inp.type}
      placeholder={inp.placeholder}
      title={inp.title}
      value={inputValues[inp.id] || ""}
      onInputChange={handleInputChange}
      formData={formData}
      setFormData={setFormData}
      className="w-full sm: border-b py-5 px-3 text-md font-light"
    />
  );

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 13000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[300px] sm:w-[560px] flex flex-col space-y-4">
      <div className=" flex flex-col items-center xs:max-sm:w-[300px]">
        <div className="flex flex-col items-center text-center text-[#575B60]">
          <p className="text-[21px] font-semibold leading-6">
            Your qualifications sound interesting to us! ✅
          </p>
          <p className="sm:w-[400px] py-2 text-md">
            We would like to get to know you better and need some contact
            details from you
          </p>
          <p className="text-md underline sm:w-[440px]">
            Don't worry - we will of course treat your data confidentially 🔐
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col ">
        <p className="text-center text-black md:text-4xl text-2xl sm:text-3xl font-semibold pb-6">
          What is the best way to reach you?
        </p>
        
        {param.map(createUserInput)}
        <Dropdown
        emote='💬'
  title={drop[0].title}
  options={drop[0].options}
  formData={formData}
  setFormData={setFormData}
  className = 'bg-white text-left  py-5 border-b ' 
  ulClassName = 'rounded-lg text-center border rounded-lg text-sm py-2 mb-2 hover:cursor-pointer'
  onOptionSelect={setSelectedOption} // Pass the setSelectedOption function as the onOptionSelect prop
/>

<div className="flex flex-row mb-4 bg-white py-5 pl-4 items-center rounded-b-lg">
  <div
     className={`checkbox ${isTermsChecked ? "checked" : ""}`}
    onClick={() => setIsTermsChecked(!isTermsChecked)}
  >
    {isTermsChecked && <FcCheckmark className="text-green-700 h-4 w-6" />}
  </div>
  <label
    htmlFor="checkbox"
    className="w-full hover:cursor-pointer py-2 pl-4 text-sm bg-white"
    onClick={() => setIsTermsChecked(!isTermsChecked)}
  >
    <span className="underline"> Privacy Policy,</span> Read and accepted
  </label>
</div>

        <button
          type="submit"
          className={`bg-[#222F65] mb-4 self-center sm:w-[400px] text-white w-full py-4 text-lg rounded-md font-bold ${
            !isTermsChecked ? "opacity-50 pointer-events-none" : ""
          } ${animate ? 'animate-button' : ''}`}
          onClick={handleSubmit}
          disabled={!isTermsChecked}
        >
          Receive ✅ an individual job offer
        </button>
      </form>
    </div>
  );
}

export default UserDetails;
