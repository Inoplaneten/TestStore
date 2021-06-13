import React from 'react';
import classes from './Section.module.scss';

const Section = props => {
    return (
        <section className={classes.section}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

export { Section };