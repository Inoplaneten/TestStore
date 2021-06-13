import React from 'react';
import { connect } from 'react-redux';
import { CardsProducts } from './CardsProducts';
import { Button } from '@material-ui/core';
import { getTheRemovalOfProducts, getTheRemovalOfProduct } from '../../../redux/redusers/productsReduser';

const CardsProductContainer = ({products, getTheRemovalOfProducts, isAdmin, ...props}) => {
    return (
        <>
            {products.length > 0 &&
            <CardsProducts 
                isAdmin={isAdmin}
                products={products}
                {...props}
            />
            }
            {products.length > 0 && isAdmin && 
            <Button 
                variant='contained' 
                color='primary'
                style={{margin: '35px auto 0'}}
                onClick={getTheRemovalOfProducts}
            >
                Очистить все
            </Button>
            } 
        </>
    )
}

const mapStateToProps = state => ({
    products: state.products.dataProducts,
    isAdmin: state.auth.admin.isAuth
})

const mapDispatchToProps =  {
    getTheRemovalOfProducts,
    getTheRemovalOfProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsProductContainer);