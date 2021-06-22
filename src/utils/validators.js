import { getFieldErrors } from './getFieldErrors';

export const isEmpty = value => !value && !value;

export const isWithinRange = (value, min, max) => value >= min && value <= max;

export const isMaxLength = (value, max) => value > max && value > max;

export const isMinLength = (value, min) => value < min && value < min;

export const isNumber = value => !Number.isNaN(+value);

export const isWords = value => {
    let regex = /[\d|,|.|e|E|+]+/g,
        num = value.match(regex);

    return !num && !num;
}

export const isEmail = value => {
    let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        email = value.match(regex);

    return email;
}

export const isAdminOrUser = value => {
    let status1 = 'Админ',
        status2 = 'Пользователь';

    return (status1 === value) || (status2 === value);
}

export const isErrorsForm = form =>  {
    let errorsForm;

    Object.values(form.fields).some(field => {
        let { error } = getFieldErrors(field, field.value);

        if(error) {
            return(errorsForm = true);
        }

        return(errorsForm = false);
    });

    return errorsForm;
};