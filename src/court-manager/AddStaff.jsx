import React from 'react';
import InputText from '../components/InputText';
import Dialog from '../components/Dialog';
import Password from '../components/Password';
function AddStaff(props) {
  //Close ADD
  const handleClose = () => {
    props.setIsOpen();
  }
  const html = (
    <div className="">
      <div>
        <div className='mb-4 flex gap-5'>
          <InputText
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            label="First Name"
          />
          <InputText
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            label="Last Name"
          />
        </div>
        <div className="mb-4">
          <InputText
            id="email"
            name="email"
            placeholder="Enter staff's email"
            label="Email"
          />
        </div>
        <div className="mb-4">
          <InputText
            id="phone"
            name="phone"
            placeholder="Enter staff's phone"
            label="Phone"
          />
        </div>
        <div className="mb-4">
          <Password
            id="password"
            name="password"
            placeholder="Enter staff's password"
            label="Password"
            value={'staff'}
            onchange={null}
            evaluate={true}
          />
        </div>
      </div>
    </div>
  )
  return (
    <div>
      <Dialog
        html={html}
        isOpen={props.isOpen}
        setIsOpen={handleClose}
        title='staff information'
      />

    </div>
  );
}
export default AddStaff;
