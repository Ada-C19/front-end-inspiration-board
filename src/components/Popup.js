import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      closePopup();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <h3>Welcome to our Lantern Festival!</h3>
            <p>Add your name to the participant list,</p>
            <p>Pick a theme for your wish! school, work, romance?</p>
            <p>Write your wishes on lanterns,</p>
            <p>and they will come true!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
