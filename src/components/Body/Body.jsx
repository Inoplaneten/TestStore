import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import StorePage from '../pages/StorePage/StorePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AddProductPage from '../pages/AddProductPage/AddProductPage';
import NoAdminPage from '../pages/NoAdminPage/NoAdminPage';
import NonExistentPage from '../pages/NonExistentPage/NonExistentPage';

const Body = () => {
    return (
        <Switch>
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
            <Route 
                path='/non-existent-page' 
                exact
            >
                <NonExistentPage/>
            </Route>
            <Redirect 
                to='/non-existent-page'
            />
        </Switch>
    )
}

export { Body }