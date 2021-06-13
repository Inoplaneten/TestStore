import { products } from './redusers/productsReduser';
import { appInitialized } from './redusers/appInitializedReduser';
import { auth } from './redusers/authReduser';
import { formUserStatus } from './redusers/formUserStatusReduser';
import { formAddProduct } from './redusers/formAddProduct';
import { menu } from './redusers/menuReduser';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { saveState } from './localStorage';

const сonnectReducers = combineReducers({
    appInitialized,
    products,
    auth,
    formUserStatus,
    formAddProduct,
    menu
});

let store = createStore(сonnectReducers, applyMiddleware(thunkMiddleware));

store.subscribe(() => saveState('products', store.getState().products.dataProducts));

window.store = store;

export default store;