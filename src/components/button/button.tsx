import { useState, useEffect } from 'react';
import SpinnerLoading from '../../components/SpinnerLoading';
import {ButtonProps} from './index'

const Button = (props: ButtonProps): JSX.Element => {
  const [btnClass, setBtnClass] = useState('');

  useEffect(() => {
    const computedClass =
      (props.className || '') +
      (props.fullWidth ? ' !w-full ' : '') +
      (props.fullRounded ? ' !rounded-full ' : '') +
      (props.size === 'small' ? ' py-1 px-3 ' : props.size === 'medium' ? ' py-2.5 px-6 ' : props.size === 'large' ? ' py-3.5 px-8 ' : '') +
      ' flex gap-3 items-center justify-center font-medium disabled:bg-opacity-90 disabled:pointer-events-none transition-all duration-300 ease-in-out rounded-md';

    setBtnClass(computedClass);
  }, [props.className, props.fullWidth, props.fullRounded, props.size]);

  return (
    <button
      className={btnClass}
      type={props.type}
      disabled={props.loading}
      onClick={props.onClick}
    >
      {props.loading ? (
        <SpinnerLoading
          type='button'
          height='24'
          width='24'
          color={props.loadingColor ? props.loadingColor : '#fff'}
        />
      ) : (
        <>
          {props.icon && (
            <div className={`${props.iconClass} w-5`}>
              {props.icon}
            </div>
          )}
          {props.label}
        </>
      )}
    </button>
  );
};

export default Button;
