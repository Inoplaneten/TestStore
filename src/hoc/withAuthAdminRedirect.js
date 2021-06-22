import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthAdmin } from '../redux/selectors/authSelector';

const mapStateToPropsToRedirect = state => ({
    isAdmin: getAuthAdmin(state)
});

export const withAuthAdminRedirect = Component => {
    const RedirectComponent = ({isAdmin, ...props}) => {
        if(isAdmin) {
            return <Redirect to='/'/>
        }
    
        return <Component {...props}/>
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
};