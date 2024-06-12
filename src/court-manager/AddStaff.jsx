import React from 'react';
import InputText from '../components/InputText';
import Dialog from '../components/Dialog';
import Password from '../components/Password';
import { useTranslation } from 'react-i18next';
function AddStaff(props) {
  const { t } = useTranslation();
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
            placeholder={t('enterFirstName')}
            label={t('firstName')}
          />
          <InputText
            id="lastName"
            name="lastName"
            placeholder={t('enterLastName')}
            label={t('lastName')}
          />
        </div>
        <div className="mb-4">
          <InputText
            id="email"
            name="email"
            placeholder={t('enterStaffEmail')}
            label="Email"
          />
        </div>
        <div className="mb-4">
          <InputText
            id="phone"
            name="phone"
            placeholder={t('enterStaffPhone')}
            label={t('phone')}
          />
        </div>
        <div className="mb-4">
          <Password
            id="password"
            name="password"
            placeholder={t('enterStaffPassword')}
            label={t('password')}
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
