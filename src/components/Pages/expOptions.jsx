import React from 'react'
import { useNavigate } from "react-router-dom";
import Dropdown from "../dropdown";
import experience from "../experience";


function ExpOpt({ formData, setFormData }) {
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/UserDetails")
  }
  const [opt1, opt2, opt3, opt4] = experience;

  return (
    <div className="flex flex-col w-[460px] sm:w-[560px] items-center space-y-8 text-black font-['Lato'] h-screen">
    
      <form action="" onSubmit={handleSubmit} className="w-full flex flex-col text-center">
      <p className="text-2xl sm:text-3xl md:text-4xl sm:w-[600px] w-[400px] self-center font-semibold pb-6">What experience do you bring to the table?</p>
         <Dropdown
        title={opt1.label}
        options={opt1.options}
        formData={formData}
        setFormData={setFormData}
        img = ''
        category = 'jobOptions'
        className = 'w-full bg-white text-left py-5 px-4 border-t border-l  border-r rounded-t-lg'
         ulClassName = 'rounded-lg text-center border text-sm py-2 mb-2 hover:cursor-pointer'
      />
      <Dropdown
        title={opt2.label}
        options={opt2.options}
        formData={formData}
        setFormData={setFormData}
        category = 'jobOptions'
        className = 'bg-white text-left p-3 px-4 py-5 border-t border-l border-r'
        ulClassName = 'rounded-lg text-center border  text-sm py-2 mb-2 hover:cursor-pointer'
      />
      <Dropdown
        title={opt3.label}
        options={opt3.options}
        formData={formData}
        setFormData={setFormData}
        category = 'jobOptions'
        className = 'bg-white text-left p-3 px-4 py-5  border-t border-l border-r'
         ulClassName = 'rounded-lg text-center border  text-sm py-2 mb-2 hover:cursor-pointer'
      />
      <Dropdown
        title={opt4.label}
        options={opt4.options}
        formData={formData}
        setFormData={setFormData}
        className = 'bg-white rounded-b-lg text-left p-3 px-4 py-5 border' 
         ulClassName = 'rounded-lg text-center border rounded text-sm py-2 mb-2 hover:cursor-pointer'
      />
      <button type="submit" className="text-xl self-center w-full sm:w-[400px] bg-[#222F65] rounded-lg mt-6 py-3 text-white">Further 👉</button>
      </form>
     
    </div>
  );
}

export default ExpOpt;