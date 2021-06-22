export const getFieldErrors = (field, value) => {
    let error,
        errorText;

    'validators' in field && field.validators.some(errorType => {
        if(field.required && 'getErrorEmpty' in errorType && errorType.getErrorEmpty(value)) {
            return (errorText = errorType.errorText, error = true);
        }else if(value.length) {
            if('getErrorWords' in errorType && errorType.getErrorWords(value)) {
                return (errorText = errorType.errorText, error = true);
            }else if('getErrorNumber' in errorType && errorType.getErrorNumber(value)) {
                return (errorText = errorType.errorText, error = true);
            }else if('getErrorEmail' in errorType && errorType.getErrorEmail(value)) {
                return (errorText = errorType.errorText, error = true);
            }else if('getErrorAdminOrUser' in errorType && errorType.getErrorAdminOrUser(value)) {
                return (errorText = errorType.errorText, error = true);
            }else if('getErrorMinLength' in errorType && errorType.getErrorMinLength(value)) {
                return (errorText = errorType.errorText, error = true);
            }else if('getErrorMaxLength' in errorType && errorType.getErrorMaxLength(value)) {
                return (errorText = errorType.errorText, error = true);
            }
        }

        return (errorText = null, error = false);
    });

    return {error, errorText};
};