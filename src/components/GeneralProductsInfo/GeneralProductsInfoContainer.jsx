import React from 'react';
import { connect } from 'react-redux';
import { GeneralProductsInfo } from './GeneralProductsInfo';
import { getTotalPriceProducts, getAveragePriceProducts, getQuantityProducts } from '../../redux/selectors/productsSelector';

const GeneralProductsInfoContainer = props => {
    return (
        <GeneralProductsInfo currency="грн." {...props}/>
    )
};

const mapStateToProps = state => ({
    products: {
        totalPrice: getTotalPriceProducts(state),
        averagePrice: getAveragePriceProducts(state),
        quantity: getQuantityProducts(state)
    }
});

export default connect(mapStateToProps, null)(GeneralProductsInfoContainer);