import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthAdmin, getAuthUser } from '../redux/selectors/authSelector';

const mapStateToPropsToRedirect = state => ({
    isAdmin: getAuthAdmin(state),
    isUser: getAuthUser(state)
});

export const withAuthRedirect = Component => {
    const RedirectComponent = ({isAdmin, isUser, ...props}) => {
        if(!isAdmin && !isUser) {
            return <Redirect to='/auth'/>
        }
    
        return <Component {...props}/>
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
};