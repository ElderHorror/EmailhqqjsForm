import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";

function Dropdown(props) {
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const options = props.options || [];

  useEffect(() => {
    console.log(props.formData);
  }, [selectedOption, props.formData]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
    setIsComplete(true); // Mark the dropdown as complete when an option is selected
    props.onOptionSelect(option); // Call the onOptionSelect prop with the selected option
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === null) {
      // Handle case when no option is selected
      console.log("Please select an option");
      return;
    }

    const updatedUserDetails = [
      ...props.formData.options.userDetails,
      { title: props.title, content: selectedOption },
    ];

    const updatedOptions = {
      ...props.formData.options,
      userDetails: updatedUserDetails,
    };

    const updatedFormData = {
      ...props.formData,
      options: updatedOptions,
    };

    props.setFormData(updatedFormData);
  };

  const handleLabelClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div
        className={`${props.className} ${
          isComplete ? "" : ""
        }`}
      >
        <div
          className="label pl-4 flex flex-row justify-between"
          onClick={handleLabelClick}
        >
          <div className="flex flex-row items-center">
            <div className="w-4 mr-8 text-2xl">{props.emote}</div>

            {selectedOption ? (
              <div>{selectedOption}</div>
            ) : (
              <div>{props.title}</div>
            )}
          </div>

          {!isComplete ? (
          <div role="img" className="flex items-center justify-end pr-5 text-yellow-500" aria-label="check-mark">
           <FaExclamationTriangle />
          </div>
        ) : (
          <div role="img" className="flex items-center justify-end pr-5 " aria-label="caution-mark">
             <FcCheckmark />
          </div>
        )}
        </div>
        {isExpanded && (
          <>
          <div className="xs:max-md:fixed xs:max-md:inset-0 xs:max-md:bg-gray-800 xs:max-md:bg-opacity-50 xs:max-md:z-40"></div>
          <div className="xs:max-md:fixed xs:max-md:inset-x-0 xs:max-md:bottom-0 xs:max-md:z-50">
            <div className="bg-white rounded-t-lg p-4 xs:max-md:w-full xs:max-md:mx-auto">
              <div className="md:hidden text-xl font-bold mb-2">{props.title}</div>
              <ul className="text-center">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={props.ulClassName}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </>
        )}
      </div>
    </form>
  );
}

export default Dropdown;
