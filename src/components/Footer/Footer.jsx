import classes from './Footer.module.scss';
import React from 'react';

import GeneralProductsInfoContainer from '../GeneralProductsInfo/GeneralProductsInfoContainer';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <GeneralProductsInfoContainer/>
            </div>
        </footer>
    )
}

export { Footer }