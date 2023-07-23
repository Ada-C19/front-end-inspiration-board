import React from 'react'
import PropTypes from 'prop-types';
import './CardForm.css';

const CardForm = ({createCard, selectedTheme}) => {
    const [formFields, setFormFields] = React.useState({
        message: '',
    });

    const [displayForm, setDisplayForm] = React.useState(false);

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createCard(formFields);
        setFormFields({
            message: ''
        });
    };


    React.useEffect(() => {
        PropTypes.checkPropTypes(
            {
            createCard: PropTypes.func.isRequired,
            },
            { createCard },
            'prop',
            'CardForm'
        );
    }, [createCard]);

    const toggleShow = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <form className={`${selectedTheme}-new-card-form`} onSubmit={handleSubmit}>
                <section className={`${selectedTheme}-new-board-header`}>
                    <h2>Create New Card</h2>
                    <button type="button" className = "toggleShow" onClick={toggleShow}>{displayForm ? 'hide' : 'show'}</button>
                </section>

                <section className={`${selectedTheme}-new-card-fields ${displayForm ? 'show' : 'hide'}`}>
                    <div>
                        <label htmlFor="message">Message : </label>
                        <textarea 
                            name="message" 
                            value={formFields.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="preview">Preview : </label>
                        <span>{formFields.message}</span>
                    </div>
                    <button 
                        className={`${selectedTheme}-button new-card-submit ${selectedTheme}-glow-on-hover`}
                        type="submit" 
                        value="add_card">Create</button>
                </section>
        </form>
    );
};

CardForm.propTypes = {
    createCard: PropTypes.func.isRequired
};  

export default CardForm;