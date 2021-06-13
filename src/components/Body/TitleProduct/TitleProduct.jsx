import React from 'react';
import classes from './TitleProduct.module.scss';

const TitleProduct = props => {
    return (
        <h2 className={classes.titleProduct}>
            {props.title}
        </h2>
    )
}

export { TitleProduct };