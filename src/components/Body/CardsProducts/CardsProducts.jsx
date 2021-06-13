import React from 'react';
import { CardProduct } from '../CardsProducts/CardProduct/CardProduct';
import { Button } from '@material-ui/core';
import classes from './CardsProducts.module.scss';

const CardsProducts = ({products, isAdmin, getTheRemovalOfProduct, ...props}) => {
    return (
        <div className={classes.cardsProducts}>
            {products.map((product, index) => {
                return (
                    <CardProduct
                        key={index}
                        product={products[index]}
                        {...props}
                    >
                        {isAdmin && 
                        <Button
                            style={{marginTop: '15px'}}
                            variant='contained' 
                            color='primary'
                            onClick={() => getTheRemovalOfProduct(product.id)}
                        >
                            Удалить
                        </Button>
                        }     
                    </CardProduct>
                )
            })}
        </div>
    )
}

export { CardsProducts };