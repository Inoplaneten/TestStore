import { getAuthAdmin, setAuthUser } from './authReduser';
import { getProducts } from './productsReduser';
import { loadState } from '../localStorage';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

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
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => dispatch => {
    let promiseAuthAdmin = dispatch(getAuthAdmin()),
        promiseGetProducts = dispatch(getProducts());

    Promise.all([promiseAuthAdmin, promiseGetProducts]).then(() => {
        dispatch(initializedSuccess());
        
        let isAuthUser = loadState('userStatus') !== undefined && loadState('userStatus');
        dispatch(setAuthUser(isAuthUser));
    });
}

export { appInitialized };