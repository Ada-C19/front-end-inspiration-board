import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewCardForm = ({ addCardCallback }) => {
    const [formFields, setFormFields] = useState ({
        
    })
    return (
        <div>NewCardForm</div>
    )
}

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm