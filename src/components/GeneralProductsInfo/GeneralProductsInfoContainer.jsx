import React from 'react';
import { connect } from 'react-redux';
import { GeneralProductsInfo } from './GeneralProductsInfo';

const GeneralProductsInfoContainer = props => {
    return (
        <GeneralProductsInfo currency="грн." {...props}/>
    )
}

const mapStateToProps = state => ({
    products: {
        totalPrice: state.products.totalPrice,
        averagePrice: state.products.averagePrice,
        quantity: state.products.quantity
    }
})

export default connect(mapStateToProps, null)(GeneralProductsInfoContainer);