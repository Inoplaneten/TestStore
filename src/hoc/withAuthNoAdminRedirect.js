import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthUser } from '../redux/selectors/authSelector';

const mapStateToPropsToRedirect = state => ({
    isUser: getAuthUser(state)
})

export const withAuthNoAdminRedirect = Component => {
    const RedirectComponent = props => {
        if(props.isUser) {
            return <Redirect to='/no-admin'/>
        }
    
        return <Component {...props}/>
    }
    
    let ConnectedRedirectComponent = connect(mapStateToPropsToRedirect)(RedirectComponent)

    return ConnectedRedirectComponent;
}