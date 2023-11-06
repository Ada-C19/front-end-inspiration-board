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
                <li key={index}>
                    {err}
                </li>
        ))}
        </>
    ) : (
        <li>{message}</li>
    )}
    </>
    );
};

export default FormFieldError;
