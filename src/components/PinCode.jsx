import PinInput from 'react-pin-input';

const PinCode = (props) => {
  return (
    <PinInput
      length={6}
      initialValue=""
      onChange={(value, index) => {}}
      type="numeric"
      inputMode="number"
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '10px'
      }}
      inputStyle={{
        borderColor: '#e5e7eb',
        borderWidth: '2px',
        borderRadius: '6px',
      }}
      inputFocusStyle={{borderColor: '#6b7280'}}
      onComplete={(value, index) => {}}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
}

export default PinCode;
