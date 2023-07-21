import React, { useState } from "react";
import '../../App.css';
import './NewBoardForm.css'

const kInitialFormData = {
    title: '',
    owner: '',
};

const NewBoardForm = (props) => {
    const [formData, setFormData] = useState(kInitialFormData);

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        
        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.handleBoardSubmit({ ...formData });
        setFormData(kInitialFormData);
      };

    return (
        <section className="form board__form">
            <h2>New Board</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="title"/>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter a Title"
                />
                <label htmlFor="owner" />
                <input 
                    type="text"
                    id="owner"
                    name="owner"
                    value={formData.owner}
                    onChange={handleChange}
                    placeholder="Board Owner"
                />
                <input disabled={((formData.title.length === 0) || (formData.owner.length === 0))} type="submit" value="Submit New Board" className="submit-button"/>
            </form>
        </section>
    );
};

export default NewBoardForm;