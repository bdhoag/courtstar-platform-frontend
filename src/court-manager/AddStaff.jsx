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
