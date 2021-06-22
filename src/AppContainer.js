import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { getInitializedApp } from '../src/redux/selectors/appInitializedSelector';
import { initializeApp } from '../src/redux/redusers/appInitializedReduser';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const AppContainer = ({initializeApp, ...props}) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#a3cd39',
            }
        },
        overrides: {
            MuiButton: {
                root: {
                    display: 'block',
                    textTransform: 'none',
                    color: '#fff'
                },
                label: {
                    color: '#fff',
                    fontSize: '16px'
                }
            },
            MuiChecbox: {
                root: {
                    color: '#a3cd39'
                }
            }
        }
    })

    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    return (
        <ThemeProvider theme={theme}>
            <App {...props}/>
        </ThemeProvider>
    )
};

const mapStateToProps = state => ({
    initialized: getInitializedApp(state)
})

export default connect(mapStateToProps, { initializeApp })(AppContainer);