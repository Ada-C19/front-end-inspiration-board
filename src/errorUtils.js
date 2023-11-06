const getResponseError = (error) => {
    
    if (error && error.response.status === 400 && error.response.data) {
        const responseErrors = error.response.data.errors;
        if (responseErrors) {
            const errorData = {};
            for (const errorItem of responseErrors) {
                errorData[errorItem.field] = errorItem.message;
            }
            return errorData;
        }
        return null;
    };
}

export default getResponseError;