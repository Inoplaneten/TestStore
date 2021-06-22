import { setAddProduct, setGeneralPoductsInfo } from '../redusers/productsReduser';
import { isEmpty, isMinLength, isNumber, isMaxLength, isErrorsForm } from '../../utils/validators';
import { getFieldErrors } from '../../utils/getFieldErrors';

const UPDATE_INPUT_VALUE_FORM_ADD_PRODUCT  = 'online-store/formAddProduct/UPDATE_INPUT_VALUE_FORM_ADD_PRODUCT',
      NOVALIDATE_INPUT_VALUE_FORM_ADD_PRODUCT = 'online-store/formAddProduct/NOVALIDATE_INPUT_VALUE_FORM_ADD_PRODUCT',
      GET_WAIT_FORM_ADD_PRODUCT = 'online-store/formAddProduct/GET_WAIT_FORM_ADD_PRODUCT',
      SUCCES_FORM_ADD_PRODUCT = 'online-store/formAddProduct/SUCCES_FORM_ADD_PRODUCTS';

const initialState = {
    name: 'formAddProduct',
    fields: {
        productName: {
            type: 'text',
            placeholder: 'Введите название товара',
            name: 'productName',
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
                    getErrorMinLength: value => isMinLength(value.length, 10),
                    errorText: 'Минимум 10 символов'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 20),
                    errorText: 'Максимум 20 символов'
                },
            ]
        },
        productDesc: {
            type: 'textarea',
            placeholder: 'Введите описание товара',
            name: 'productDesc',
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
                    getErrorMinLength: value => isMinLength(value.length, 30),
                    errorText: 'Минимум 20 символов'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 70),
                    errorText: 'Максимум 70 символов'
                },
            ]
        },
        productPrice: {
            type: 'text',
            placeholder: 'Введите стоимость товара',
            name: 'productPrice',
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
                    getErrorNumber: value => !isNumber(value),
                    errorText: 'Только цифры'
                },
                {
                    getErrorMinLength: value => isMinLength(value.length, 3),
                    errorText: 'Минимум 3 символов'
                },
                {
                    getErrorMaxLength: value => isMaxLength(value.length, 12),
                    errorText: 'Максимум 12 символов'
                }
            ]
        },

    },
    validators: { getErrorsForm: form => isErrorsForm(form) },
    succesForm: false,
    isLoading: false
};

const formAddProduct = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_VALUE_FORM_ADD_PRODUCT:
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.inputName]: {
                        ...state.fields[action.inputName],
                        value: action.currentValue,
                        error: false
                    }
                }
            }
             
        case NOVALIDATE_INPUT_VALUE_FORM_ADD_PRODUCT:
            let { error, errorText } = getFieldErrors(state.fields[action.inputName], action.currentValue);

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
        case GET_WAIT_FORM_ADD_PRODUCT:
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
        case SUCCES_FORM_ADD_PRODUCT:
           return {
                ...state,
                succesForm: false,  
                isLoading: false,
                isAdmin: false
           }
        default: 
            return state;    
    }
};

export const setUpdateFormAddProductDataField = (currentValue, inputName) => ({
    type: UPDATE_INPUT_VALUE_FORM_ADD_PRODUCT,
    currentValue,
    inputName
});

export const setValidateFormAddProductField = (currentValue, inputName) => ({
    type: NOVALIDATE_INPUT_VALUE_FORM_ADD_PRODUCT,
    currentValue,
    inputName
});

export const setGetWaitFormAddProduct = () => ({ type: GET_WAIT_FORM_ADD_PRODUCT });

export const setSuccesFormAddProduct = () => ({ type: SUCCES_FORM_ADD_PRODUCT });

export const handleSubmitFormAddProduct = (event, form) => dispatch => {
    event.preventDefault();

    if(('validators' in form && 'getErrorsForm' in form.validators) && form.validators.getErrorsForm(form)) {
        Object.values(form.fields).forEach(field => {
            'validators' in form.fields[field.name] && dispatch(setValidateFormAddProductField(field.value, field.name));
        });
    }else {
        let { productName, productDesc, productPrice } = form.fields;
        let newProduct = {
            id: Math.round(Math.random()*10000), 
            name: productName.value, 
            description: productDesc.value, 
            price: productPrice.value
        };

        dispatch(setAddProduct(newProduct));
        dispatch(setGeneralPoductsInfo());
        dispatch(setGetWaitFormAddProduct());
        dispatch(setSuccesFormAddProduct());
    }
};

export { formAddProduct };