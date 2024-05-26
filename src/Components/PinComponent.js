import React, { useState, useRef, useEffect } from 'react';

const sharedClasses = {
  bgZinc100: 'bg-zinc-100',
  bgWhite: 'bg-white',
  shadowLg: 'shadow-lg',
  roundedLg: 'rounded-lg',
  p8: 'p-8',
  maxWSm: 'max-w-sm',
  wFull: 'w-full',
  textLg: 'text-lg',
  fontSemibold: 'font-semibold',
  textZinc800: 'text-zinc-800',
  textSm: 'text-sm',
  textZinc600: 'text-zinc-600',
  mt2: 'mt-2',
  mt4: 'mt-4',
  textXl: 'text-xl',
  fontBold: 'font-bold',
  flex: 'flex',
  justifyBetween: 'justify-between',
  w10: 'w-10',
  h10: 'h-10',
  textCenter: 'text-center',
  mt6: 'mt-6',
  bgBlue500: 'bg-blue-500',
  textWhite: 'text-white',
  py2: 'py-2',
  rounded: 'rounded',
  hoverBgBlue600: 'hover:bg-blue-600',
  flexCol: 'flex-col',
  itemsCenter: 'items-center',
  textBlue500: 'text-blue-500',
  hoverTextBlue600: 'hover:text-blue-600',
  bgZinc200: 'bg-zinc-200',
  hoverTextWhite: 'hover:text-white',
};

const PinInput = React.forwardRef(({ value, onChange, index, setFocusIndex, focusPrev }, ref) => {
  const handleInput = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, ''); // Allow only digits
    if (newValue.length <= 1) {
      onChange(newValue);
      if (newValue.length === 1 && index < 5) {
        setFocusIndex(index + 1);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && !value && index > 0) {
      focusPrev(index - 1);
    }
  };

  return (
    <input
      ref={ref}
      type="password"
      value={value}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
      maxLength={1}
      className={`${sharedClasses.bgZinc200} ${sharedClasses.w10} ${sharedClasses.h10} ${sharedClasses.rounded} ${sharedClasses.textCenter}`}
    />
  );
});

const PinComponent = () => {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [focusIndex, setFocusIndex] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[focusIndex]?.focus();
  }, [focusIndex]);

  const handleChange = (newValue, index) => {
    const newPin = [...pin];
    newPin[index] = newValue;
    setPin(newPin);
  };

  const focusPrev = (index) => {
    setFocusIndex(index);
  };

  return (
    <div className={`flex ${sharedClasses.flexCol} ${sharedClasses.itemsCenter} ${sharedClasses.bgZinc100} p-4 min-h-screen`}>
      <div className={`${sharedClasses.bgWhite} ${sharedClasses.shadowLg} ${sharedClasses.roundedLg} ${sharedClasses.p8} ${sharedClasses.maxWSm} ${sharedClasses.wFull}`}>
        <h1 className={`${sharedClasses.textLg} ${sharedClasses.fontSemibold} ${sharedClasses.textZinc800}`}>IDSPay</h1>
        <p className={`${sharedClasses.textSm} ${sharedClasses.textZinc600} ${sharedClasses.mt2}`}>Hey UserName!</p>
        <p className={`${sharedClasses.textSm} ${sharedClasses.textZinc600}`}>Your Screen was locked because of inactivity to protect your account</p>
        <h2 className={`${sharedClasses.textXl} ${sharedClasses.fontBold} ${sharedClasses.textZinc800} ${sharedClasses.mt4}`}>Enter Login Pin</h2>
        <div className={`${sharedClasses.flex} ${sharedClasses.justifyBetween} ${sharedClasses.mt4}`}>
          {pin.map((value, index) => (
            <PinInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={value}
              index={index}
              onChange={(newValue) => handleChange(newValue, index)}
              setFocusIndex={setFocusIndex}
              focusPrev={focusPrev}
            />
          ))}
        </div>
        <button className={`${sharedClasses.mt6} ${sharedClasses.bgBlue500} ${sharedClasses.textWhite} ${sharedClasses.wFull} ${sharedClasses.py2} ${sharedClasses.rounded} ${sharedClasses.hoverBgBlue600}`}>UNLOCK</button>
        <div className={`${sharedClasses.flex} ${sharedClasses.flexCol} ${sharedClasses.itemsCenter} ${sharedClasses.mt4}`}>
          <button className={`${sharedClasses.textWhite} ${sharedClasses.hoverTextWhite}`}>Unlock Using Password</button>
          <button className={`${sharedClasses.textWhite} ${sharedClasses.hoverTextWhite} ${sharedClasses.mt2}`}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default PinComponent;
