import React from 'react';
import classes from './PriceProduct.module.scss';

const PriceProduct = props => {
    return (
        <span className={classes.priceProduct}>
            <span>
                {props.price}
            </span>
            <span className={classes.currencyProduct}>
                {props.currency}
            </span>
        </span>
    )
}

export { PriceProduct };