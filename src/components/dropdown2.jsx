import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

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
      <div className={props.className}>
        {selectedOption ? (
          <div className="label pl-4" onClick={handleLabelClick}>
            {selectedOption}
          </div>
        ) : (
          <div className="label pl-4 flex flex-row justify-between" onClick={handleLabelClick}>
            {props.title}
            {!isComplete && (
              <div className="flex items-center justify-end pr-4 text-yellow-500">
                <FaExclamationTriangle className="mr-1" />
              </div>
            )}
          </div>
        )}
        {isExpanded && (
          <ul className='text-center mt-4 self-center'>
            {options.map((option, index) => (
              <li key={index} className={props.ulClassName} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

export default Dropdown;
