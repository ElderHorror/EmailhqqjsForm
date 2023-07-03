import React, { useState } from 'react';
import { FaExclamationTriangle, FaChevronDown } from 'react-icons/fa';

function Dropdown(props) {
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasSelectedOption, setHasSelectedOption] = useState(false);
  const options = props.options || [];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
    setIsComplete(true);
    setHasSelectedOption(true);

    props.setFormData((prevFormData) => {
      return {
        options: {
          ...prevFormData.options,
          expOptions: [
            ...prevFormData.options.expOptions,
            {
              [props.title]: option,
            },
          ],
        },
        jobOptions: prevFormData.jobOptions,
      };
    });
  };

  const handleLabelClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${props.className} ${isComplete ? '' : 'border-yellow-500'}`}>
      <div className="label pl-2 flex flex-row justify-between" onClick={handleLabelClick}>
        <div className="flex flex-row items-center">
          <div className="w-4 mr-6 text-2xl">{props.emote}</div>
          {selectedOption || props.title}
        </div>
        {!isComplete && (
          <div className="flex items-center justify-end pr-4 text-yellow-500">
            <div className="flex items-center justify-end pr-4 text-black">
              <FaChevronDown />
            </div>
            <FaExclamationTriangle className="mr-1" />
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
  );
}

export default Dropdown;
