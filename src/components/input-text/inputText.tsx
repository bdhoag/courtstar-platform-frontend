import React, { useEffect, useState } from 'react';
import { InputTextProps } from './index';

const InputText: React.FC<InputTextProps> = ({
  id,
  label,
  name,
  placeholder,
  onchange,
  value,
  disabled,
  type = 'text',
}) => {
  const [formattedValue, setFormattedValue] = useState("");

  useEffect(() => {
    setFormattedValue(value);
  }, [value])


  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (type === 'number') {
      const numericValue = value.replace(/\D/g, '');
      setFormattedValue(formatNumber(numericValue));
    } else {
      setFormattedValue(value);
    }
    onchange(event);
  };

  return (
    <div className="w-full flex flex-col font-medium gap-2 text-gray-800">
      <label
        htmlFor={id}
        className='font-semibold'
      >
        {label}
      </label>
      <input
        type={type === 'number' ? 'text' : type}
        name={name}
        id={id}
        className='w-full py-2.5 px-6 border border-gray-300 rounded-lg placeholder:text-sm placeholder:font-normal outline-gray-400'
        placeholder={placeholder}
        onChange={handleChange}
        value={formattedValue}
        disabled={disabled}
      />
    </div>
  );
};

export default InputText;
