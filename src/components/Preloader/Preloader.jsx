import React from 'react';
import classes from './Preloader.module.scss';
import loader from '../../assets/img/loader.svg'

const Preloader = props => {
    return (
        <div className={`${classes.preloader} ${!props.initialized ? classes.show : classes.hidden}`}>
            <img src={loader} alt="Загрузчик"/>
        </div>
    )
}

export { Preloader };