import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'localData/'
}) 

export const productsLocal = {
    getProducts() {
        return instance.get('products.json');
    }
} 