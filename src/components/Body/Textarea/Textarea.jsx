import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = props => {
    return (
        <div className={classes.fieldBox}>
            {
                props.error &&
                <>  
                    <label className={`${classes.errorInfo}`}>Error</label>
                    <span className={classes.errorIcon}></span>
                </>
            }
            <textarea 
                name={props.name}
                value={props.value}
                placeholder={props.placeholder} 
                onChange={props.onUpdateValue}
                onBlur={props.onTouchedValidate}
                className={`${classes.field} ${props.error ? classes.error : ''}`}
            >
           </textarea>    
            {
                props.error &&  
                <span className={classes.errorMessage}>
                    {
                        props.errorText
                    }
                </span>
            }
        </div>
    )
}

export { Textarea };