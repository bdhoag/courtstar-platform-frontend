import React, { useEffect, useState } from 'react';
import './index.css';
import Button from '../../button';
import { useTranslation } from 'react-i18next';

interface Props {
  onChange: () => void
}

const SwitchButton: React.FC<Props> = ({ onChange }) => {
  const { t } = useTranslation();

  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [frequency, setFrequency] = useState<any>(1);

  useEffect(() => {
    if (isChecked) setIsDropdownOpen(true);
    else setIsDropdownOpen(false);
  }, [isChecked])


  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  const handleChangeFrequency = (e) => {
    if (isNaN(e.target.value) || e.target.value > 10 || e.target.value < 0) {

    } else {
      setFrequency(e.target.value);
    }
  };

  return (
    <div className='switch-button relative'>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        id="switch"
        name="switch-checkbox"
        value="switch-button" />
      <label
        htmlFor="switch"
        className="container">
        <div className='relative'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar-days">
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
                <rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
              <path d="M8 14h.01"/>
              <path d="M12 14h.01"/><path d="M16 14h.01"/>
              <path d="M8 18h.01"/><path d="M12 18h.01"/>
              <path d="M16 18h.01"/>
          </svg>
          {
            isChecked && frequency && frequency!=0 &&
            <div className='absolute -bottom-1 right-0 bg-red-600 text-white text-[9px] rounded-full h-3 w-3 flex justify-center items-center'>
              {frequency}
            </div>
          }
        </div>
        <div className="action">
          <span className="option-1">{t('weeklyBooking')}</span>
          <span className="option-2">{t('weeklyBooking')}</span>
        </div>
      </label>

      {
        isDropdownOpen &&
        <div className='absolute mt-1.5 bg-white shadow-lg border rounded-md w-full p-4'>

          <div className="max-w-xs mx-auto">
              <div className="relative flex items-center justify-center mb-4 font-semibold">
                {t('frequency')} (1 - 10):
              </div>
              <div className="relative flex items-center justify-center mb-4">
                  <Button
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
                    }
                    fullRounded
                    onClick={() => setFrequency(frequency - 1)}
                    disabled={frequency === 1}
                    className='hover:bg-primary-green bg-white border-primary-green text-primary-green border-2 hover:text-white p-px disabled:opacity-70'
                  />
                  <input
                    type="text"
                    id="counter-input"
                    className="flex-shrink-0 border-0 bg-transparent text-base font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center !block font-semibold"
                    placeholder=""
                    value={frequency}
                    onChange={handleChangeFrequency}
                    required
                  />
                  <Button
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    }
                    fullRounded
                    onClick={() => setFrequency(frequency + 1)}
                    disabled={frequency === 10}
                    className='hover:bg-primary-green bg-white border-primary-green text-primary-green border-2 hover:text-white p-px disabled:opacity-70'
                  />
              </div>
              <div className="relative flex items-center justify-between gap-2">
                  <Button
                    label={t('apply')}
                    fullWidth
                    className='bg-primary-green hover:bg-teal-900 text-white p-1 text-sm'
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <Button
                    label={t('cancel')}
                    fullWidth
                    className='border-red-600 border text-red-600 hover:bg-red-600 hover:text-white p-1 text-sm'
                    onClick={() => {
                      setIsChecked(false);
                      setFrequency(1);
                    }}
                  />
              </div>
          </div>

        </div>
      }
    </div>
  );
};

export default SwitchButton;
