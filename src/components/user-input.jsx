import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc'


function UserInput(props) {
  const [change, setChange] = useState(null);
  const [emoteChange, setEmoteChange] = useState(null);
  const [checkChange, setCheckChange] = useState(null)
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Run the if condition on initial load or reload
    if (props.id === 1) {
      setChange({  borderRadius: "5px 5px 0 0" });
      setEmoteChange({ borderRadius: "5px 0 0 0"})
      setCheckChange ({borderRadius: '0 5px 0 0'})
    } else {
      setChange(null);
      setEmoteChange(null)
      setCheckChange(null)
    }
  }, []); //

  useEffect(() => {
    // Check input validity on initial load or reload
    checkInputValidity(props.value, props.type);
  }, [props.value, props.type]);

  const checkInputValidity = (value, type) => {
    if (type === "email" && !isValidEmail(value)) {
      setChange({ border: "1px solid yellow", borderBottom: "transparent",  });
    
      setIsValid(false);
    } else if (type === "tel" && !isValidTel(value)) {
      setChange({ border: "1px solid yellow" });
  
      setIsValid(false);
    } else if (value.trim() === "") {
      setChange({ borderRadius: "6px 6px 0 0",   border: "1px solid yellow", borderBottom: "transparent",});
     
      setIsValid(false);
    } else {
      setChange(null);
     
     
      setIsValid(true);
    }
  };

  const isValidEmail = (value) => {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidTel = (value) => {
    // Simple telephone validation
    return /^\d+$/.test(value);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    props.onInputChange(props.id, value);
  };

  return (
    <div  style={change} className="flex flex-row h-[70px]">
      <div>

      </div>
        <div style={emoteChange} className="bg-white self-center border-b w-16 pl-5 h-full text-2xl py-5">{props.emote}</div>
      <input
        id={props.id}
       
        type={props.type}
        name=""
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleInputChange}
        className={`outline-none select-none ${props.className}`}

      />
      <div style={checkChange} className="px-5 border-b self-center inline-flex items-center bg-white h-full">
        {isValid ? (
          <span role="img" aria-label="check-mark">
            <FcCheckmark />
          </span>
        ) : (
          <span role="img" className="text-yellow-500" aria-label="caution-mark">
            <FaExclamationTriangle />
          </span>
        )}
      </div>
    </div>
  );
}

export default UserInput;

