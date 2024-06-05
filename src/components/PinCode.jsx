import { useEffect, useRef } from 'react';
import PinInput from 'react-pin-input';

const PinCode = (props) => {

  const pinRef = useRef(null);

  useEffect(() => {
    if (props.clear && pinRef.current) {
      pinRef.current.clear();
    }
  }, [props.clear]);

  return (
    <PinInput
      ref={pinRef}
      length={6}
      initialValue={props.value}
      onChange={(value, index) => props.onChange(value)}
      type="numeric"
      inputMode="number"
      style={{
        padding: '18px',
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '5px'
      }}
      inputStyle={{
        borderColor: '#e5e7eb',
        borderWidth: '2px',
        borderRadius: '6px',
      }}
      inputFocusStyle={{borderColor: '#6b7280'}}
      onComplete={props.onComplete}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
}

export default PinCode;
