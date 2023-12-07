import React, { useState } from "react";

export default function Employees() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleButtonClick = (option) => {
    setSelectedOption(option);
    console.log(option);
  };
  return (
    <div className='container p-0 text-center'>
      <h1 className='my-4 ps-2 display-5'>Employee Information Resources</h1>
      <p clasNames='ps-2'>Please select one:</p>
      <div className='select-one-box py-5 my-3'>
        <button
          className='btn'
          id='iAmStateEE'
          onClick={() => handleButtonClick("state")}
        >
          State Employees
        </button>

        <button
          className='btn'
          id='iAmLPBEE'
          onClick={() => handleButtonClick("lpb")}
        >
          LPB Employees
        </button>
      </div>

      <div>
        {selectedOption === "state" && <p>STATE EMPLOYEE STUFF GOES HERE!</p>}
        {selectedOption === "lpb" && <p>LPB EMPLOYEE STUFF GOES HERE!!!</p>}
      </div>
    </div>
  );
}
