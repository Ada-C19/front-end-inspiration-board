import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';


const NewBoardForm = ({ createBoard }) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: '',
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

    return (
        <div className="add">
            <form id="add-board" onSubmit={onFormSubmit}>

                <div className="board-form-input">
                    <input
                        name="title"
                        value={formFields.title}
                        onChange={onTitleChange}
                        className="input-form"
                        placeholder='Board Title'
                        required
                    />
                </div>

                <div className="board-form-input">
                    <input
                        name="owner"
                        value={formFields.owner}
                        onChange={onOwnerChange}
                        className="input-form"
                        placeholder='Owner'
                        required
                    />
                </div>

                <div className="add-board">
                    <button className='pink-plus' type="submit" form="add-board">
                        +
                    </button>
                </div>

            </form>
        </div>
    )
}

NewBoardForm.propTypes = {
    createBoard: PropTypes.func.isRequired
};

export default NewBoardForm;

