import React from 'react';
import classes from './SectionTitle.module.scss'

const SectionTitle = props => {
    return (
        <h2 className={classes.sectionTitle}>
            {props.title}
        </h2>
    )
}

export { SectionTitle };