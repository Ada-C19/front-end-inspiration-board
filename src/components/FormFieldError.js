import React from 'react';

const FormFieldError = ({ message }) => {
    if (message === undefined || message === null) {
        return <></>;
    }

    console.log('message', message)

    return (
        <>
        {Array.isArray(message) ? (
            <>
            {message.map((err, index) => (
                <li className="error-message" key={index}>
                    {err}
                </li>
        ))}
        </>
    ) : (
        <li className="error-message">{message}</li>
    )}
    </>
    );
};

export default FormFieldError;
