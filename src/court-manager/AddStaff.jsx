import React from 'react';
import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
function AddStaff(props) {
  //Close ADD
  const handleClose = () => {
    props.setIsOpen();
  }
  const html = (
    <div className="w-[440px]">
      <h2 className="text-4xl font-semibold mb-5 text-center">STAFF INFORMATION</h2>
      <div>
      <div className='mb-4 flex gap-5'>
            <InputText
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                label="First Name"
            />
            <InputText
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                label="Last Name"
            />
    </div>
        <div className="mb-4">
          <InputText
            id="Phone"
            name="Phone"
            placeholder="Enter Staff's Phone"
            label="Phone"
          />
        </div>
        <div className="mb-4">
          <InputText
            id="Email"
            name="Email"
            placeholder="Enter Staff's Email"
            label="Email"
          />
        </div>
        <div className="font-semibold flex gap-6">
        <div className="flex justify-center gap-2.5 text-white bg-primary-green w-1/2 py-2 rounded-md hover:bg-teal-900 ease-in-out duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                <div className="">
                  Upload
                </div>
        </div>
        <div className="flex justify-center gap-2.5 text-red-600 border-2 border-red-600 w-1/2 py-2 rounded-md hover:bg-red-600 hover:text-white ease-in-out duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                <div className="">
                  Discard
                </div>
              </div>
        </div>
        
      </div>
    </div>
  )
  return (
    <div>
      <PopupModal
        html={html}
        isOpen={props.isOpen}
        setIsOpen={handleClose}
      />

    </div>
  );
}
export default AddStaff;
