import React from 'react';
import classes from './GeneralProductsInfo.module.scss';

const GeneralProductsInfo = ({products, currency}) => {
    return (
        <ul className={classes.generalProductsInfo}>
            <li className={classes.generalProductsInfoItem}>
                Общая стоимость товаров: <span>{products.totalPrice} {currency}</span>
            </li>
            <li className={classes.generalProductsInfoItem}>
                Средняя стоимость товаров: <span>{products.averagePrice} {currency}</span>
            </li>
            <li className={classes.generalProductsInfoItem}>
                Количество товаров: <span>{products.quantity}</span>
            </li>
        </ul>
    )
}

export { GeneralProductsInfo }