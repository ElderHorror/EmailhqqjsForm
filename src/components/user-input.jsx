import React from "react";

function UserInput(props) {
  const handleInputChange = (event) => {
    const { value } = event.target;
    props.onInputChange(props.id, value);
  };

  return (
    <div className="flex flex-col rounded-lg">
      <input
        id={props.id}
        type={props.type}
        name=""
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleInputChange}
        className={props.className}
      />
    </div>
  );
}

export default UserInput;
