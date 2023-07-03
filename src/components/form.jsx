import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./checkbox.css";

function Form(props) {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const form = useRef();
  const navigate = useNavigate();
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

  let [change, setChange] = useState(null);
  let [change2, setChange2] = useState(null);
  let [change3, setChange3] = useState(null);
  let [change4, setChange4] = useState(null);
  let [change5, setChange5] = useState(null);
  let [change6, setChange6] = useState(null);
  let [change7, setChange7] = useState(null);
 
  

  let [timesClicked, setTimesClicked] = useState(0);
  let [timesClicked2, setTimesClicked2] = useState(0);
  let [timesClicked3, setTimesClicked3] = useState(0);
  let [timesClicked4, setTimesClicked4] = useState(0);
  let [timesClicked5, setTimesClicked5] = useState(0);
  let [timesClicked6, setTimesClicked6] = useState(0);
  let [timesClicked7, setTimesClicked7] = useState(0);
 
  function handleDivClick(event) {
    const newClick = timesClicked + 1;
    setTimesClicked(newClick);
    const newChange = { border: "1px solid #222F65" };

    if (timesClicked % 4 === 1) {
      setChange(newChange);
    } else {
      setChange(null);
    }

    console.log(newClick);
  }

  function handleDivClick2() {
    const newClick = timesClicked2 + 1;
    setTimesClicked2(newClick);
    const newChange = { border: "1px solid #222F65" };

    if (timesClicked2 % 4 === 1) {
      setChange2(newChange);
    } else {
      setChange2(null);
    }

    console.log(newClick);
  }
  function handleDivClick3() {
    const newClick = timesClicked3 + 1;
    setTimesClicked3(newClick);
    const newChange = { border: "1px solid #222F65" };

    if (timesClicked3 % 4 === 1) {
      setChange3(newChange);
    } else {
      setChange3(null);
    }

    console.log(newClick);
  }
  function handleDivClick4() {
    const newClick = timesClicked4 + 1;
    setTimesClicked4(newClick);
    const newChange = { border: "1px solid #222F65" };

    if (timesClicked4 % 4 === 1) {
      setChange4(newChange);
    } else {
      setChange4(null);
    }

    console.log(newClick);
  }
  function handleDivClick5() {
    const newClick = timesClicked5 + 1;
    setTimesClicked5(newClick);
    const newChange = { border: "1px solid #222F65" };

    if (timesClicked5 % 4 === 1) {
      setChange5(newChange);
    } else {
      setChange5(null);
    }

    console.log(newClick);
  }
  function handleDivClick6() {
    const newClick = timesClicked6 + 1;
    setTimesClicked6(newClick);
    const newChange = { border: "1px solid #222F65" };

    if (timesClicked6 % 4 === 1) {
      setChange6(newChange);
    } else {
      setChange6(null);
    }

    console.log(newClick);
  }
  function handleDivClick7() {
    const newClick = timesClicked7 + 1;
    setTimesClicked7(newClick);
    const newChange = { border: "1px solid #222F65" };

    if (timesClicked7 % 4 === 1) {
      setChange7(newChange);
    } else {
      setChange7(null);
    }

    console.log(newClick);
  }


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

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 12000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col space-y-[18px] items-center w-[340px] sm:w-[560px] md:w-[560px] "
      ref={form}
    >
      <div
        id="1"
        style={change}
        className="field-group w-full bg-white rounded-lg"
        onClick={handleDivClick}
      >
        <label
          onClick={handleClick}
          htmlFor="checkbox-1"
          className=" flex flex-row cursor-pointer justify-between text-[15px] max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
          data-checkbox-id="1"
        >
          🏡 Home Office and Flexible Working Hours
          <span

          // className={`flex items-center justify-center w-5 h-5 border-2 rounded-full mr-2 ${
          //   checkboxStates["1"] ? "bg-[#222F65] border-transparent" : "border-gray-500"
          // }`}
          >
            <div class="flex items-center">
              <input
                className="opacity-0 absolute h-6 w-6"
                checked={checkboxStates["1"]}
                id="checkbox-1"
                type="checkbox"
                onChange={handleClick}
              />
              <div class="bg-white border-2 rounded-full border-grey w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center focus-within:border-[#222F65]">
                <svg
                  class="fill-current rounded-full self-center hidden w-3 h-3  pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.4140.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </span>
        </label>
      </div>
      <div onClick={handleDivClick2} style={change2} className="w-full bg-white rounded-lg">
        <label
          onClick={handleClick}
          htmlFor="checkbox-2"
          className="flex cursor-pointer flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
          data-checkbox-id="2"
        >
          💶 Attractive Salary Package
          <span>
            <div class="flex items-center">
              <input
                className="opacity-0 absolute h-6 w-6"
                checked={checkboxStates["2"]}
                id="checkbox-2"
                type="checkbox"
                onChange={handleClick}
              />
              <div class="bg-white border-2 rounded-full border-grey w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center focus-within:border-[#222F65]">
                <svg
                  class="fill-current rounded-full self-center hidden w-3 h-3  pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.4140.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </span>
        </label>
      </div>
      <div onClick={handleDivClick3} style={change3} className="w-full bg-white rounded-lg">
        <label
          onClick={handleClick}
          htmlFor="checkbox-3"
          className="flex cursor-pointer flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
          data-checkbox-id="3"
        >
          💻 Digital Way of Working
          <span>
            <div class="flex items-center">
              <input
                className="opacity-0 absolute h-6 w-6"
                checked={checkboxStates["3"]}
                id="checkbox-3"
                type="checkbox"
                onChange={handleClick}
              />
              <div class="bg-white border-2 rounded-full border-grey w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center focus-within:border-[#222F65]">
                <svg
                  class="fill-current rounded-full self-center hidden w-3 h-3  pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.4140.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </span>
        </label>
      </div>
      <div onClick={handleDivClick4} style={change4} className="w-full bg-white rounded-lg">
        <label
          onClick={handleClick}
          htmlFor="checkbox-4"
          className="flex cursor-pointer flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
          data-checkbox-id="4"
        >
          💪 Motivated Team
          <span>
            <div class="flex items-center">
              <input
                className="opacity-0 absolute h-6 w-6"
                checked={checkboxStates["4"]}
                id="checkbox-4"
                type="checkbox"
                onChange={handleClick}
              />
              <div class="bg-white border-2 rounded-full border-grey w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center focus-within:border-[#222F65]">
                <svg
                  class="fill-current rounded-full self-center hidden w-3 h-3  pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.4140.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </span>
        </label>
      </div>
      <div onClick={handleDivClick5} style={change5} className="w-full bg-white rounded-lg">
        <label
          onClick={handleClick}
          htmlFor="checkbox-5"
          className="flex cursor-pointer flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
          data-checkbox-id="5"
        >
          🎓 Training and Support
          <span>
            <div class="flex items-center">
              <input
                className="opacity-0 absolute h-6 w-6"
                checked={checkboxStates["5"]}
                id="checkbox-5"
                type="checkbox"
                onChange={handleClick}
              />
              <div class="bg-white border-2 rounded-full border-grey w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center focus-within:border-[#222F65]">
                <svg
                  class="fill-current rounded-full self-center hidden w-3 h-3  pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.4140.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </span>
        </label>
      </div>
      <div onClick={handleDivClick6} style={change6} className="w-full bg-white rounded-lg">
        <label
          onClick={handleClick}
          htmlFor="checkbox-6"
          className="flex cursor-pointer flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
          data-checkbox-id="6"
        >
          👶 Family-Friendliness
          <span>
            <div class="flex items-center">
              <input
                className="opacity-0 absolute h-6 w-6"
                checked={checkboxStates["6"]}
                id="checkbox-6"
                type="checkbox"
                onChange={handleClick}
              />
              <div class="bg-white border-2 rounded-full border-grey w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center focus-within:border-[#222F65]">
                <svg
                  class="fill-current rounded-full self-center hidden w-3 h-3  pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.4140.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </span>
        </label>
      </div>
      <div onClick={handleDivClick7} style={change7} className="w-full bg-white rounded-lg">
        <label
          onClick={handleClick}
          htmlFor="checkbox-7"
          className="flex cursor-pointer flex-row justify-between mx-auto max-w-md sm:max-w-xl w-full md:max-w-3xl lg:max-w-4xl p-[20px]"
          data-checkbox-id="7"
        >
          🌀 Independent Work
          <span>
            <div class="flex items-center">
              <input
                className="opacity-0 absolute h-6 w-6"
                checked={checkboxStates["7"]}
                id="checkbox-7"
                type="checkbox"
                onChange={handleClick}
              />
              <div class="bg-white border-2 rounded-full border-grey w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center focus-within:border-[#222F65]">
                <svg
                  class="fill-current rounded-full self-center hidden w-3 h-3  pointer-events-none"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g
                      transform="translate(-9 -11)"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    >
                      <path d="m25.576 11.4140.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </span>
        </label>
      </div>
      <button
        className={`pulse-shake bg-[#222F65] text-white text-lg w-full sm:w-[400px] h-[60px] rounded-md ${
          Object.values(checkboxStates).filter((isChecked) => isChecked)
            .length >= 3
            ? ""
            : "cursor-not-allowed opacity-50"
          } ${animate ? 'animate-button' : ''}`}
        type="submit"
        disabled={
          Object.values(checkboxStates).filter((isChecked) => isChecked)
            .length < 3
        }
      >
        {" "}
        To My Qualifications 👉
      </button>
    </form>
  );
}

export default Form;
