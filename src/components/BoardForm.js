import React from 'react';
import './BoardForm.css'
import PropTypes from 'prop-types';

const BoardForm = ({createBoard, selectedTheme}) => {

    const [formFields, setFormFields] = React.useState({
        title: '',
        owner: ''
    });
    const [displayForm, setDisplayForm] = React.useState(false);

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayForm(false);
        createBoard(formFields);
        setFormFields({
            title: '',
            owner: ''
        });

    }
    
    const toggleShow = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <form className={`${selectedTheme}-new-board-form`} onSubmit={handleSubmit}>
            <section className={`${selectedTheme}-new-board-header`}>
                <h2>Create New Board</h2>
                <button type="button" className = "toggleShow" onClick={toggleShow}>{displayForm ? 'hide' : 'show'}</button>
            </section>
            <section className={`${selectedTheme}-inputs ${displayForm ? 'show' : 'hide'}`}>
                <div className={`${selectedTheme}-new-board-fields`}>

                    <div>
                        <input 
                        name="title" 
                        value={formFields.title} 
                        onChange={handleChange} 
                        required />
                        <label htmlFor="title">Title</label> 
                        
                    </div>

                    <div>
                        <input 
                        name="owner" 
                        value={formFields.owner} 
                        onChange={handleChange} 
                        required />
                        <label htmlFor="owner">Owner</label>
                    </div>
                    <div>
                        <label htmlFor="preview">Preview : </label>
                        <span>{formFields.title} - {formFields.owner}</span>
                    </div>
                    <button className={`${selectedTheme}-button ${selectedTheme}-new-board-submit ${selectedTheme}-glow-on-hover `} type="submit" value="add_board">Create</button>
                </div>
            </section>
        </form>
    )
}

BoardForm.propTypes = {
    createBoard: PropTypes.func.isRequired
};

export default BoardForm;