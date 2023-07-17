import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = ({ addBoardCallback }) => {
    const [formFields, setFormFields] = useState({
        title:'',
        owner:'',
        cards:[]
    });

    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value
        })
    };


    const onDescChange = (event) => {
        setFormFields({
            ...formFields,
            description: event.target.value
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
            nameData: formFields.name,
            descData: formFields.description
        });

        setFormFields({
            name: '',
            description: ''
        });
    };

    return (
        <form onSubmit={onFormSubmit}>


        <div>
            <label htmlFor="boardName">Board Name:</label>
            <input 
            name="boardName"
            value={formFields.name}
            onChange={onNameChange} />
        </div>

        <div>
            <label htmlFor="description">Description:</label>
            <input 
            name="description"
            value={formFields.description}
            onChange={onDescChange} />
        </div>

        <input
            type="submit"
            value="Add Board" />


    </form>
    )
}

NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
};

export default NewBoardForm;

