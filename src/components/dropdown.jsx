import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function Dropdown(props) {
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const options = props.options || [];


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);

    // Update the specific dropdown's value in formData
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
        jobOptions: prevFormData.jobOptions, // Preserve the existing jobOptions value
      };
    });

    setIsComplete(true);
  };

  const handleLabelClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={`${props.className} ${isComplete ? '' : 'border-yellow-500'}`}>
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
          <ul className="text-center mt-4">
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
        )}
       
      </div>
    </form>
  );
}

export default Dropdown;


// import React from 'react'

// function Dropdown(props) {
//   const [value, setValue] = React.useState('fruit')
//   const experience = [
//     {label: 'Current Occupation',
//     options: ['Tax Clerk', 'Tax Specialists', 'Payroll Accountant', 'Financial Accountant', 'Accountant', 'Others in the field of taxation']
//     }
  
//   ]
  
//   function handleChange(event) {
//     setValue(event.target.value)
//   }
//   return(
//     <div>
//       <label htmlFor="">Current Occupation
//         <select name="" id="" value={value} onChange={handleChange}>
//         {experience.map((exp) => (<option>{exp.options}</option>))}
//       </select>
//       </label>
    
//     </div>
//   )
// }

// export default Dropdown;