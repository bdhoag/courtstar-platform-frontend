import React, { useState, useEffect, useRef } from 'react';

function Dropdown({ placeholder, items, onSelect, initialValue, className = '', itemClassName = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedItem(initialValue);
  }, [initialValue]);

  return (
    <div className={`w-full text-gray-800 relative ${className}`} ref={dropdownRef}>
      <button
        className="border border-gray-300 focus:outline focus:outline-1 focus:outline-gray-400 py-3 px-6 rounded-lg w-full text-gray-500 flex justify-between items-center"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className={`text-sm font-normal ${(selectedItem || initialValue) ? 'text-gray-800' : 'text-gray-400'}`}>
          {selectedItem || initialValue || placeholder}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isOpen ? 'rotate-180 lucide lucide-chevron-down' : 'lucide lucide-chevron-down'}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute w-full flex flex-col border border-gray-200 bg-white z-10 shadow-md rounded-lg mt-0.5"
          role="listbox"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={`w-full py-2 px-6 rounded-lg hover:bg-gray-200 transition-all ease-in-out duration-300 cursor-pointer ${itemClassName}`}
              onClick={() => handleSelectItem(item)}
              role="option"
              aria-selected={selectedItem === item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
