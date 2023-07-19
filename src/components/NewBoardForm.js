import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ({ addBoardCallback }) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: '',
        cards: [],
    });

    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    };


    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
        })
    };

    // a way to handle both changes at once (refactored above 2 functions into one)
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     setFormFields({
    //         ...formFields,
    //         [name]: event.target.value
    //     });
    // };

    const onFormSubmit = (event) => {
        event.preventDefault();

        addBoardCallback({
            titleData: formFields.title,
            ownerData: formFields.owner,
        });
        setFormFields({
            title: '',
            owner: '',
        });
    };

    return (
        <form id="add-board" onSubmit={onFormSubmit}>

            <div className="board-form-input">
                {/* <label htmlFor="boardTitle">Board Title:</label> */}
                <input
                    name="title"
                    value={formFields.title}
                    onChange={onTitleChange}
                    className="input-form"
                    placeholder='Board Title'
                />
            </div>

            <div className="board-form-input">
                {/* <label htmlFor="owner">Owner:</label> */}
                <input
                    name="owner"
                    value={formFields.owner}
                    onChange={onOwnerChange}
                    className="input-form"
                    placeholder='Owner'
                />
            </div>

            <div className="add-board">
                <button type="submit"  form="add-board">
                    +
                </button>
            </div>

        </form>
    )
}

NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
};

export default NewBoardForm;

