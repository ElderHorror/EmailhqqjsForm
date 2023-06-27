import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {  useNavigate } from "react-router-dom";

function Form(props) {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const form = useRef();
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(null);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    jobOptions: [],
  });
  const [checkboxStates, setCheckboxStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  function handleClick(event) {
    const content = event.target.textContent;
    setSelectedOption(content);
  
    const checkboxId = event.target.getAttribute("data-checkbox-id");
    const updatedCheckboxStates = { ...checkboxStates };
    updatedCheckboxStates[checkboxId] = !updatedCheckboxStates[checkboxId];
    setCheckboxStates(updatedCheckboxStates);
  
    props.setFormData((prevFormData) => {
      const { options } = prevFormData;
      const { jobOptions } = options;

      const updatedJobOptions = jobOptions.includes(content)
        ? jobOptions.filter((option) => option !== content)
        : [...jobOptions, content];

      return {
        ...prevFormData,
        options: {
          ...options,
          jobOptions: updatedJobOptions,
        },
      };
    });
  }


  function sendEmail(event) {
    event.preventDefault();
    navigate("/ExpOpt");

    const selectedOptionsCount = Object.values(checkboxStates).reduce(
      (count, isChecked) => {
        if (isChecked) {
          count += 1;
        }
        return count;
      },
      0
    );

    if (selectedOptionsCount >= 3) {
      navigate("/ExpOpt");
    } else {
      // Show an error message or perform any necessary action
      alert("Please select at least 3 options");
    }
  }

  return (
    <form
        onSubmit={sendEmail}
        className="flex flex-col space-y-[18px] items-center w-[440px] sm:w-[560px] md:w-[560px] "
        ref={form}
      >
        <div id="1" className="w-full bg-white rounded-lg">
        <label
  onClick={handleClick}
  htmlFor="checkbox-1"
  className="flex flex-row justify-between text-[15px] max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
  data-checkbox-id="1"
>
  🏡 Home Office and Flexible Working Hours
  <span
    className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
      checkboxStates["1"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
    }`}
  >
    <input
      className="appearance-none checked:accent-blue-500 checked:border-0"
      checked={checkboxStates["1"]}
      id="checkbox-1"
      type="checkbox"
      onChange={handleClick}
    />
  </span>
</label>

        </div>
        <div className="w-full bg-white rounded-lg">
          <label
            onClick={handleClick}
            htmlFor="checkbox-2"
            className="flex flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
            data-checkbox-id="2"
          >
            💶 Attractive Salary Package
            <span className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
      checkboxStates["2"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
    }`}>
              <input
               className="appearance-none checked:accent-blue-500 checked:border-0"
                id="checkbox-2"
                type="checkbox"
                checked={checkboxStates["2"]}
              />
            </span>
          </label>
        </div>
        <div className="w-full bg-white rounded-lg">
          <label
            onClick={handleClick}
            htmlFor="checkbox-3"
            className="flex flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
            data-checkbox-id="3"
          >
            💻 Digital Way of Working
            <span className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
      checkboxStates["3"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
    }`}>
              <input
               className="appearance-none checked:accent-blue-500 checked:border-0"
                id="checkbox-3"
                type="checkbox"
                checked={checkboxStates["3"]}
              />
            </span>
          </label>
        </div>
        <div className="w-full bg-white rounded-lg">
          <label
            onClick={handleClick}
            htmlFor="checkbox-4"
            className="flex flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
            data-checkbox-id="4"
          >
            💪 Motivated Team
            <span className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
      checkboxStates["4"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
    }`}>
              <input
               className="appearance-none checked:accent-blue-500 checked:border-0"
                id="checkbox-4"
                type="checkbox"
                checked={checkboxStates["4"]}
              />
            </span>
          </label>
        </div>
        <div className="w-full bg-white rounded-lg">
          <label
            onClick={handleClick}
            htmlFor="checkbox-5"
            className="flex flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
            data-checkbox-id="5"
          >
            🎓 Training and Support
            <span className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
      checkboxStates["5"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
    }`}>
              <input
               className="appearance-none checked:accent-blue-500 checked:border-0"
                id="checkbox-5"
                type="checkbox"
                checked={checkboxStates["5"]}
              />
            </span>
          </label>
        </div>
        <div className="w-full bg-white rounded-lg">
          <label
            onClick={handleClick}
            htmlFor="checkbox-6"
            className="flex flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
            data-checkbox-id="6"
          >
            👶 Family-Friendliness
            <span className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
      checkboxStates["6"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
    }`}>
              <input
               className="appearance-none checked:accent-blue-500 checked:border-0"
                id="checkbox-6"
                type="checkbox"
                checked={checkboxStates["6"]}
              />
            </span>
          </label>
        </div>
        <div className="w-full bg-white rounded-lg">
          <label
            onClick={handleClick}
            htmlFor="checkbox-7"
            className="flex flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
            data-checkbox-id="7"
          >
            🌀 Independent Work
            <span className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
      checkboxStates["7"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
    }`}>
              <input
               className="appearance-none checked:accent-blue-500 checked:border-0"
                id="checkbox-7"
                type="checkbox"
                checked={checkboxStates["7"]}
              />
            </span>
          </label>
        </div>
        <button
        className={`pulse-shake bg-[#222F65] text-white text-lg w-full sm:w-[400px] h-[60px] rounded-md ${
          Object.values(checkboxStates).filter((isChecked) => isChecked)
            .length >= 3
            ? ""
            : "cursor-not-allowed opacity-50"
        }`}
        type="submit"
        disabled={Object.values(checkboxStates).filter((isChecked) => isChecked).length < 3}
      > To My Qualifications 👉
      </button>
      </form>
  )
}

export default Form