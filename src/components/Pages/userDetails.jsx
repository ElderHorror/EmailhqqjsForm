import React, { useState } from "react";
import UserInput from "../user-input";
import Dropdown from "../dropdown2";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaExclamationTriangle } from "react-icons/fa";

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
    },
    {
      id: 2,
      type: "email",
      placeholder: "Your e-mail address",
      title: "Email",
    },
    {
      id: 3,
      type: "tel",
      placeholder: "Your phone number (for enquiries only)",
      title: "Phone Number",
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
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
     'YOUR_PUBLIC_KEY'
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
      key={inp.id}
      id={inp.id}
      type={inp.type}
      placeholder={inp.placeholder}
      title={inp.title}
      value={inputValues[inp.id] || ""}
      onInputChange={handleInputChange}
      formData={formData}
      setFormData={setFormData}
      className="w-full sm: border-b py-5 px-4 text-md font-light"
    />
  );

  return (
    <div className="w-[460px] sm:w-[560px] flex flex-col space-y-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center text-center text-[#575B60]">
          <p className="text-[21px] font-semibold leading-6">
            Your qualifications sound interesting to us! ✅
          </p>
          <p className="w-[400px] text-md">
            We would like to get to know you better and need some contact
            details from you
          </p>
          <p className="text-md underline w-[440px]">
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
  title={drop[0].title}
  options={drop[0].options}
  formData={formData}
  setFormData={setFormData}
  className="w-full bg-white text-left py-5 flex flex-col  border-b"
  ulClassName="rounded-lg self-center w-[400px] sm:w-[500px]  border text-sm py-2 mb-2"
  onOptionSelect={setSelectedOption} // Pass the setSelectedOption function as the onOptionSelect prop
/>

        <div className="mb-4 bg-white py-5 pl-4 rounded-b-lg">
          <input
            type="checkbox"
            name=""
            id="checkbox"
            className="bg-white"
            checked={isTermsChecked}
            onChange={(e) => setIsTermsChecked(e.target.checked)}
          />
          <label
            htmlFor="checkbox"
            className="w-full hover:cursor-pointer py-5 pr-10 text-sm bg-white"
          >
            {" "}
            <span className="underline"> Privacy Policy,</span> Read and
            accepted
          </label>
        </div>
        <button
          type="submit"
          className={`bg-[#222F65] self-center sm:w-[400px] text-white w-full py-4 text-lg rounded-md font-bold ${
            !isTermsChecked ? "opacity-50 pointer-events-none" : ""
          }`}
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
