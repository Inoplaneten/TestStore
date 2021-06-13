import { saveState } from '../localStorage';
import { authAPI } from '../../api/api';
import { setValidateFormUserStatus, setGetWaitFormUserStatus, setSuccesFormUserStatus } from '../redusers/formUserStatusReduser';

const GET_AUTH_ADMIN = 'GET_AUTH_ADMIN',
      GET_AUTH_USER = 'GET_AUTH_USER';

const initialState = {
    admin: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    },
    user: {
        isAuth: false
    }
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case GET_AUTH_ADMIN:
            return {
                ...state,
                admin: action.payload
            }
        case GET_AUTH_USER:
            return {
                ...state,
                user: {
                    isAuth: action.isAuth
                }
            }            
        default:
            return state;    
    }
}

export const setAuthAdmin = (userId, email, login, isAuth) => ({ type: GET_AUTH_ADMIN, payload: {userId, email, login, isAuth} });

export const setAuthUser = isAuth => ({ type: GET_AUTH_USER, isAuth });

export const getAuthAdmin = () => dispatch => {
    return (async () => {
        const response = await authAPI.me();
        
        if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthAdmin(id, email, login, true));
        }
    })();
}

export const getAuthUser = () => dispatch => {
    saveState('userStatus', true);
    dispatch(setAuthUser(true));
    dispatch(setGetWaitFormUserStatus());
    dispatch(setSuccesFormUserStatus());
}

export const setLogin = (email, password, rememberMe) => dispatch => {
    (async () => {
        const response = await authAPI.login(email, password, rememberMe);

        if(response.data.resultCode === 0) {
            dispatch(getAuthAdmin());
            dispatch(setGetWaitFormUserStatus());
            dispatch(setSuccesFormUserStatus());
        }else {
            dispatch(setValidateFormUserStatus());
        }
    })();
}

export const setLogout = () => dispatch => {
    (async () => {
        const response = await authAPI.logout();
        
        if(response.data.resultCode === 0) {
            dispatch(setAuthAdmin(null, null, null, false));
        }
    })();
}

export { auth };