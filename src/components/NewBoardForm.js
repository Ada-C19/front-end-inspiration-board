import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewBoardPreview from './NewBoardPreview';
import './NewBoardForm.css';

const NewBoardForm = ( props ) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: '',
    });


  const handleSubmit = (event) => {
    event.preventDefault();

    props.addNewBoard(formFields);
    setFormFields({ title: '', description: ''});
    };

    const onFieldChange = (event) => {
      setFormFields({
        ...formFields,
        [event.target.name]: event.target.value
      });
    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formFields.title}
            onChange={onFieldChange}
            required
          />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formFields.owner}
            onChange={onFieldChange}
            required
          />
        </div>
        <button type="submit" value="Add Board" disabled={!formFields.title || !formFields.owner}>
          Create a New Board
        </button>
      </form>
        <NewBoardPreview title={formFields.title} owner={formFields.owner} />
    </div>
  );
};

NewBoardForm.propTypes = {
  addNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
