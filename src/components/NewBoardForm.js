import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';
import axios from 'axios';

const NewBoardForm = ({ createBoard }) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: '',
        // cards: [],
    });

    const onFormSubmit = (event) => {
        event.preventDefault()
        createBoard(formFields)
        setFormFields({
            'title': '',
            'owner': ''
        })
    }

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

    // const addBoardData = (formData) => {
    //     // const form = document.getElementById("board-form");
    //     // form.addEventListener("submit", (e) => {
    //     //   e.preventDefault();
    //     //   const formData = new FormData(form);
    //     axios.post('https://inspoboardteam404.onrender.com/boards', formData, 
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //     )
    //   // })
    // };

    // const onFormSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('https://inspoboardteam404.onrender.com/boards', formFields).then(response => {

    //     })
    //     setFormFields({
    //         title: '',
    //         owner: '',
    //     });
    // };

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
                <button type="submit"  form="add-board" onClick={onFormSubmit}>
                    +
                </button>
            </div>

        </form>
    )
}

NewBoardForm.propTypes = {
    createBoard: PropTypes.func.isRequired
};

export default NewBoardForm;

