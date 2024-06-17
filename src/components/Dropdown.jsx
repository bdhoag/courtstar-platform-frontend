// @ts-nocheck
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

// Use forwardRef to pass ref from parent component to child component
const Dropdown = forwardRef((props, ref) => {
  // State to manage whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // State to manage the selected item (changed to store full item object)
  const [selectedItem, setSelectedItem] = useState(null);

  // Ref for the dropdown element to detect clicks outside
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle clicks outside the dropdown to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Function to handle the selection of an item from the dropdown
  const handleSelectItem = (item) => {
    setSelectedItem(item); // Update selected item state to store the full item object
    props.onSelect(item.key); // Pass the item's key to the parent component
    setIsOpen(false); // Close the dropdown after selection
  };

  // Effect to add and clean up event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Effect to update the selected item if the initial value changes
  useEffect(() => {
    setSelectedItem(props.initialValue);
  }, [props.initialValue]);

  // UseImperativeHandle to expose specific methods to parent component
  useImperativeHandle(ref, () => ({
    clearFormDropdown: () => {
      setSelectedItem(null); // Clear selected item state
      props.onSelect(null); // Notify parent component about the clear action
    }
  }));

  return (
    <div
      className={`w-full text-gray-800 relative ${props.className}`}
      ref={dropdownRef} // Attach the ref to the dropdown div
    >
      {/* Render the label if provided */}
      {props.label &&
        <div className='font-semibold mb-2'>
          {props.label}
        </div>
      }

      {/* Button to toggle the dropdown */}
      <button
        className={`border border-gray-300 focus:outline focus:outline-1 focus:outline-gray-400 py-3 px-6 rounded-lg w-full text-gray-500 flex justify-between items-center ${props.buttonClassName}`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {/* Display selected item label or placeholder */}
        <div className={`text-sm font-normal ${(selectedItem || props.initialValue) ? 'text-gray-800 font-semibold' : 'text-gray-400'}`}>
          {selectedItem ? selectedItem.label : (props.initialValue || props.placeholder)}
        </div>
        {/* SVG for dropdown arrow, rotates when open */}
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

      {/* Dropdown menu */}
      {isOpen && (
        <ul
          className={`absolute ${props.dir === 'up' ? '-top-[216px]' : ''} w-full max-h-52 overflow-y-auto flex flex-col border border-gray-200 bg-white z-10 shadow-md rounded-lg mt-0.5`}
          role="listbox"
        >
          {/* Render dropdown items */}
          {props.items.map((item, index) => (
            <li
              key={index}
              className={`w-full py-2 px-6 rounded-lg hover:bg-gray-200 transition-all ease-in-out duration-300 cursor-pointer ${props.itemClassName}`}
              onClick={() => handleSelectItem(item)}
              role="option"
              aria-selected={selectedItem === item}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

// Export the Dropdown component
export default Dropdown;
