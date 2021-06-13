import React from 'react';
import { Section } from '../../Body/Section/Section';
import CardsProductsContainer from '../../Body/CardsProducts/CardsProductsContainer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const StorePage = () => {
    return (
        <Section>
            <CardsProductsContainer/>
        </Section>
    )
}

export default compose(
    withAuthRedirect
)(StorePage);