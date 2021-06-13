import React from 'react';
import { Route } from "react-router";
import StorePage from '../pages/StorePage/StorePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AddProductPage from '../pages/AddProductPage/AddProductPage';
import NoAdminPage from '../pages/NoAdminPage/NoAdminPage';

const Body = () => {
    return (
        <>
            <Route 
                path='/'
                exact
            >
                <StorePage/>
            </Route>
            <Route 
                path='/auth'
                exact
            >
                <LoginPage/>
            </Route>
            <Route 
                path='/add-product'
                exact
            >
                <AddProductPage/>
            </Route>
            <Route 
                path='/no-admin'
                exact
            >
                <NoAdminPage/>
            </Route>
        </>
    )
}

export { Body }