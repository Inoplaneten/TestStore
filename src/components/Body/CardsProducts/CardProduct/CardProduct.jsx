import React from 'react';
import PropTypes from 'prop-types'
import { TitleProduct } from '../../TitleProduct/TitleProduct';
import { PriceProduct } from '../../PriceProduct/PriceProduct';
import classes from './CardProduct.module.scss';

const CardProduct = ({product, children}) => {
    return (
        <div className={classes.cardProduct}>
            <img src={product.thumbnail} alt={product.name} className={classes.cardProductImg}/>
            <TitleProduct
                title={product.name}
            />
            <div className={classes.cardProductInfo}>
                <p className={classes.cardProductDesc}>
                    {product.description}
                </p>
                <PriceProduct
                    currency='грн.'
                    price={product.price} 
                />
            </div>
            {children}
        </div>
    )
};

CardProduct.propTypes = {
    product: PropTypes.object,
    children: PropTypes.node
};

export { CardProduct };