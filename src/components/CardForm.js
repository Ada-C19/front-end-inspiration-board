import React, { useState } from "react";
import './CardForm.css';
// import PropTypes from 'prop-types';
import Card from "./Card";

const CardForm = ({ addCardCallback }) => {
  const [formFields, setFormFields] = React.useState({
    message: "",
    likeCount: 0,
  });

  // return (
  //     <div className="card-form">
  //         Create a new card:
  //         {CardForm}
  //     </div>
  //     )

  return (
    <form onSubmit={formFields} className="card-form">
      <label htmlFor="cardMessage">Message:</label>
      <input
        name="cardMessage"
        value={formFields.message}
        onChange={setFormFields}
      />
      <p className="warning-message">Message must be less than 40 characters</p>
      <input className="card-submit-button" type="submit" value="Create New Card" />
    </form>
  );
};

// const handleSubmit = (event) => {
//     event.preventDefault();

//     addCardCallback(formFields);

//     setFormFields({
//         message: '',
//         likeCount: 0
//     });
// };

export default CardForm;
