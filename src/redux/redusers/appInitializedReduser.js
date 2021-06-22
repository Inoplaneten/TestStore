import { requestAuthAdmin, setAuthUser } from './authReduser';
import { requestProducts } from './productsReduser';
import { loadState } from '../localStorage';

const INITIALIZED_SUCCESS = 'online-store/appInitialized/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};

const appInitialized = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }           
        default:
            return state;    
    }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => async dispatch => {
    let promiseAuthAdmin = dispatch(requestAuthAdmin()),
        promiseGetProducts = dispatch(requestProducts());

    await Promise.all([promiseAuthAdmin, promiseGetProducts]);

    try {
        dispatch(initializedSuccess());
        
        let isAuthUser = loadState('userStatus') !== undefined && loadState('userStatus');
        
        dispatch(setAuthUser(isAuthUser));
    } catch (error){

    }
};

export { appInitialized };