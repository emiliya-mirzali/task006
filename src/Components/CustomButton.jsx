import React, { useState } from 'react';
import './CustomButton.css';

const CustomButton = () => {
  const [displayText, setDisplayText] = useState('');
  const [isHintVisible, setHintVisible] = useState(false);

  const handleButtonClick = (type) => {
    switch (type) {
      case 'text':
        if (displayText) {
          setDisplayText('');
        } else {
          setDisplayText('You clicked on the text!');
        }
        break;
      case 'warning':
        alert('This is a warning!');
        break;
      case 'hint':
        setHintVisible(!isHintVisible);
        break;
      default:
        break;
    }
  };

  return (
    <div className='button-container'>
      <button
        className='text-button'
        onClick={() => handleButtonClick('text')}
      >
        Text
      </button>
      <button
        className='warning-button'
        onClick={() => handleButtonClick('warning')}
      >
        Warning
      </button>
      <button
        className='hint-button'
        onClick={() => handleButtonClick('hint')}
        onMouseOver={() => setHintVisible(true)}
        onMouseOut={() => setHintVisible(false)}
      >
        Hint
      </button>
      {isHintVisible && (
        <div className='popup'>
          <p>This is a hint!</p>
        </div>
      )}
      {displayText && <p className='display-text'>{displayText}</p>}
    </div>
  );
};

export default CustomButton;
