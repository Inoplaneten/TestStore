import { setLogin } from '../redusers/authReduser';
import { isEmpty, isMinLength, isMaxLength, isWords, isEmail, isAdminOrUser, isErrorsForm } from '../../modules/validators';

const UPDATE_INPUT_VALUE_FORM_USER_STATUS  = 'UPDATE_INPUT_VALUE_FORM_USER_STATUS',
      NOVALIDATE_INPUT_VALUE_FORM_USER_STATUS = 'NOVALIDATE_INPUT_VALUE_FORM_USER_STATUS',
      NOVALIDATE_FORM_USER_STATUS = 'NOVALIDATE_FORM_USER_STATUS',
      GET_WAIT_FORM_USER_STATUS = 'GET_WAIT_FORM_USER_STATUS',
      SUCCES_FORM_USER_STATUS = 'SUCCES_FORM_USER_STATUS';

const initialState = {
    name: 'formUserStatus',
    fields: {
        userStatus: {
            type: 'text',
            placeholder: 'Введите ваш статус',
            name: 'userStatus',
            value: '',
            required: true,
            error: false,
            errorText: null,
            validators: [
                {
                    getErrorEmpty: value => isEmpty(value),
                    errorText: 'Поле обязательно для заполнения'
                },
                {
                    getErrorWords: value => isWords(value),
                    errorText: 'Только буквы'
                },
                {
                    getErrorAdminOrUser: value => isAdminOrUser(value),
                    errorText: 'Введите статус: Админ либо Пользователь'
                },
                {
                    getErrorMinLength: value => isMinLength(value.length, 5),
                    errorText: 'Минимум 5 символов'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 12),
                    errorText: 'Максимум 12 символов'
                },
            ]
        },
        userEmail: {
            type: 'email',
            placeholder: 'Введите email админа',
            name: 'userEmail',
            value: '',
            required: false,
            error: false,
            errorText: null,
            validators: [
                {
                    getErrorEmpty: value => isEmpty(value),
                    errorText: 'Поле обязательно для заполнения'
                },
                {
                    getErrorEmail: value => isEmail(value),
                    errorText: 'Введите email'
                },
                {
                    getErrorMinLength: value => isMinLength(value.length, 5),
                    errorText: 'Минимум 5 символов'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 25),
                    errorText: 'Максимум 25 символов'
                },
            ]
        },
        userPassword: {
            type: 'password',
            placeholder: 'Введите пароль админа',
            name: 'userPassword',
            value: '',
            required: false,
            error: false,
            errorText: null,
            validators: [
                {
                    getErrorEmpty: value => isEmpty(value),
                    errorText: 'Поле обязательно для заполнения'
                },
                {
                    getErrorMinLength: value => isMinLength(value.length, 5),
                    errorText: 'Минимум 5 символов'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 30),
                    errorText: 'Максимум 30 символов'
                }
            ]
        },

    },
    validators: { getErrorsForm: form => isErrorsForm(form) },
    succesForm: false,
    isLoading: false,
    isAdmin: false,
    isUser: false,
    error: false,
    errorText: 'Неверный логин или пароль'
}

const formUserStatus = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_VALUE_FORM_USER_STATUS:
            if(action.inputName === 'userStatus' && action.currentValue === 'Админ') {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            value: action.currentValue,
                            error: false,
                        },
                        userEmail: {
                            ...state.fields.userEmail,
                            required: true,
                            error: false,
                            errorText: null
                        },
                        userPassword: {
                            ...state.fields.userPassword,
                            required: true,
                            error: false,
                            errorText: null
                        }
                    },
                    isAdmin: true,
                    isUser: false,
                    error: false
                } 
            }else if(action.inputName === 'userStatus' && action.currentValue === 'Пользователь') {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            value: action.currentValue,
                            error: false,
                        },
                        userEmail: {
                            ...state.fields.userEmail,
                            required: false,
                            error: false,
                            errorText: null
                        },
                        userPassword: {
                            ...state.fields.userPassword,
                            required: false,
                            error: false,
                            errorText: null
                        }
                    },
                    isAdmin: false,
                    isUser: true,
                    error: false
                } 
            } else if (action.inputName === 'userEmail' || action.inputName === 'userPassword') {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            value: action.currentValue,
                            error: false,
                        }
                    },
                    error: false,
                    isAdmin: action.inputName === 'userEmail' || action.inputName === 'userPassword' ? true : false,
                    isUser: false
                }
            }

            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.inputName]: {
                        ...state.fields[action.inputName],
                        value: action.currentValue,
                        error: false,
                    }
                },
                isAdmin: action.inputName === 'userEmail' || action.inputName === 'userPassword' ? true : false,
                isUser: action.currentValue === 'Пользователь' ? true : false,
                error: false
            }
             
        case NOVALIDATE_INPUT_VALUE_FORM_USER_STATUS:
            let error,
                errorText;

            'validators' in state.fields[action.inputName] && state.fields[action.inputName].validators.some(errorType => {
                if(state.fields[action.inputName].required && 'getErrorEmpty' in errorType && errorType.getErrorEmpty(action.currentValue)) {
                    return (errorText = errorType.errorText, error = true);
                }else if(action.currentValue.length) {
                    if('getErrorWords' in errorType && !errorType.getErrorWords(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }else if('getErrorEmail' in errorType && !errorType.getErrorEmail(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }else if('getErrorAdminOrUser' in errorType && !errorType.getErrorAdminOrUser(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }else if('getErrorMinLength' in errorType && errorType.getErrorMinLength(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }else if('getErrorMaxLength' in errorType && errorType.getErrorMaxLength(action.currentValue)) {
                        return (errorText = errorType.errorText, error = true);
                    }
                }

                return (errorText = null, error = false);
            });

            return {
                ...state,
                    fields: {
                        ...state.fields, 
                        [action.inputName]: {
                        ...state.fields[action.inputName], 
                        value: action.currentValue,
                        error,
                        errorText
                    }    
                }         
            }
        case NOVALIDATE_FORM_USER_STATUS:
            return {
                ...state,
                error: true
           }        
        case GET_WAIT_FORM_USER_STATUS:
            return {
                ...state,
                fields: Object.values(state.fields).reduce((fields, field) => (
                    {
                        ...fields, 
                        [field.name]: {
                            ...state.fields[field.name], 
                            value: ''
                        }
                    }), {...state.fields}
                ),
                succesForm: true,  
                isLoading: true
            }                   
        case SUCCES_FORM_USER_STATUS:
           return {
                ...state,
                succesForm: false,  
                isLoading: false,
                isAdmin: false,
                isUser: false
           }
        default: 
            return state;    
    }
};

export const setUpdateFormUserStatusDataField = (currentValue, inputName) => ({
    type: UPDATE_INPUT_VALUE_FORM_USER_STATUS,
    currentValue,
    inputName
})

export const setValidateFormUserStatusField = (currentValue, inputName) => ({
    type: NOVALIDATE_INPUT_VALUE_FORM_USER_STATUS,
    currentValue,
    inputName
})

export const setValidateFormUserStatus= () => ({ type: NOVALIDATE_FORM_USER_STATUS })

export const setGetWaitFormUserStatus = () => ({ type: GET_WAIT_FORM_USER_STATUS })

export const setSuccesFormUserStatus = () => ({ type: SUCCES_FORM_USER_STATUS })

export const handleSubmitFormUserStatus = (event, form) => dispatch => {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
    
    event.preventDefault();

    if(('validators' in form && 'getErrorsForm' in form.validators) && form.validators.getErrorsForm(form)) {
        Object.values(form.fields).forEach(field => {
            'validators' in form.fields[field.name] && dispatch(setValidateFormUserStatusField(field.value, field.name));
        });
    }else {
        let { userEmail, userPassword } = form.fields;

        dispatch(setLogin(userEmail.value, userPassword.value, true));
    }
}

export { formUserStatus };