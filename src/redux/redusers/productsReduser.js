import { loadState } from '../localStorage';
import { productsLocal } from '../../localData/localData';

const GET_PRODUCTS_BEGIN = 'online-store/products/GET_PRODUCTS_BEGIN',
      GET_PRODUCTS_SUCCESS = 'online-store/products/GET_PRODUCTS_SUCCES',
      ADD_PRODUCT = 'online-store/products/ADD_PRODUCT',
      REMOVE_PRODUCT = 'online-store/products/REMOVE_PRODUCT',
      REMOVE_PRODUCTS = 'online-store/products/REMOVE_PRODUCTS',
      GET_PRODUCTS_FAILURE = 'online-store/products/GET_PRODUCTS_FAILURE',
      GET_GENERAL_PRODUCTS_INFO = 'online-store/products/GET_GENERAL_PRODUCTS_INFO';

const initialState = {
    dataProducts: [],
    isLoading: false,
    isError: false,
    totalPrice: null,
    averagePrice: null,
    quantity: null
};

const products = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS_BEGIN:
            return {
                ...state,
                isLoading: true, 
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                dataProducts: action.payload,
                isLoading: false, 
            };
        case ADD_PRODUCT:
            return {
                ...state,
                dataProducts: [
                    ...state.dataProducts,
                    action.payload
                ]
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                dataProducts: state.dataProducts.filter(product => product.id !== action.id)
            };
        case REMOVE_PRODUCTS:
            return {
                ...state,
                dataProducts: []
            };            
        case GET_GENERAL_PRODUCTS_INFO:
            return {
                ...state,
                totalPrice: state.dataProducts.reduce((sum, item) => sum += +item.price, 0).toFixed(2),
                averagePrice: state.dataProducts.reduce((sum, item) => (sum += +item.price) / state.dataProducts.length, 0).toFixed(2),
                quantity: state.dataProducts.length
            };    
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isError: true
            };
        default: 
            return state;
    }
};

export const setProductsBegin = () => ({type: GET_PRODUCTS_BEGIN});

export const setProductsSuccess = data => ({type: GET_PRODUCTS_SUCCESS, payload: data});

export const setAddProduct = data => ({ type: ADD_PRODUCT, payload: data });

export const setRemoveProduct = id => ({ type: REMOVE_PRODUCT, id });

export const setRemoveProducts = () => ({ type: REMOVE_PRODUCTS });

export const setProductsFailure = () => ({type: GET_PRODUCTS_FAILURE});

export const setGeneralPoductsInfo = () => ({type: GET_GENERAL_PRODUCTS_INFO});

export const requestProducts = () => async dispatch => {
    const archiveProducts = loadState('products');

    dispatch(setProductsBegin());

    const response = await productsLocal.getProducts();

    try {
        dispatch(setProductsSuccess(archiveProducts || response.data));
        dispatch(setGeneralPoductsInfo());

    } catch(error) {
        dispatch(setProductsFailure());
        dispatch(setGeneralPoductsInfo());
    }
};

export const getTheRemovalOfProduct = id => dispatch => {
    dispatch(setRemoveProduct(id));
    dispatch(setGeneralPoductsInfo());
};

export const getTheRemovalOfProducts= () => dispatch => {
    dispatch(setRemoveProducts());
    dispatch(setGeneralPoductsInfo());
};

export { products };