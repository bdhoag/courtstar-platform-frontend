import React from 'react';

function InputText(props) {
  return (
    <div className="w-full flex flex-col font-medium gap-2 text-gray-800">
      <label htmlFor={props.id}
      >
        {props.label}
      </label>
      <input type="text"
        name={props.name}
        id={props.id}
        className='w-full py-2.5 px-6 border border-gray-300 rounded-lg placeholder:text-sm placeholder:font-normal outline-gray-400'
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default InputText;
