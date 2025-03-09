// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Question = (options,selectedValue) => {
  const [selectedOption, setSelectedOption] = useState(selectedValue);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            name="radio-group"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label  >{option.label}</label>

          <fieldset className="m-5 ">
           <legend className=" sr-only">Countries</legend>
           <label className="flex text-2xl pb-4 ">* Qustions</label>
           <div className="flex pr-20 pl-20 justify-around pt-3 ">
             <div className="flex items-center mb-4">
             <input
            type="radio"
            name="radio-group"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <label>{option.label}</label>
            </div>
            <div className="flex items-center mb-4 ">
              <input
                id="country-option-2"
                type="radio"
                name="countries"
                defaultValue="Germany"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-2"
                aria-describedby="country-option-2"
                onChange={()=> handleQuestion1()}

              />
              <label
                htmlFor="country-option-2"
                className="text-sm font-medium text-red-50 ml-2 block"
              >
                Germany
              </label>
            </div>
            <div className="flex items-center mb-4 ">
              <input
                id="country-option-3"
                type="radio"
                name="countries"
                defaultValue="Spain"
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby="country-option-3"
                aria-describedby="country-option-3"
                onChange={()=> handleQuestion2()}

              />
              <label
                htmlFor="country-option-3"
                className="text-sm font-medium text-red-50 ml-2 block"
              >
                Spain
              </label>
            </div>
          </div>
        </fieldset>
        <hr />
       
        
        </div>
      ))}
    </div>
  );
};

export default Question;

