import React from 'react';
import classes from './Form.module.scss';

const Form = props => {
    return (
        <>
            <form name={props.name} onSubmit={props.onSubmit}>
                {props.children}
            </form>
            {props.error && <span className={classes.errorMessage}>{props.errorText}</span>}
        </>
    )
}

export { Form };