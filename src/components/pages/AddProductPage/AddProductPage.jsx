import React from 'react';
import { compose } from 'redux';
import { withAuthNoAdminRedirect } from '../../../hoc/withAuthNoAdminRedirect';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { Section } from '../../Body/Section/Section';
import FormAddProductContainer from '../../Body/Form/FormAddProductContainer';

const AddProductPage = () => {
    return (
        <Section>
            <FormAddProductContainer/>
        </Section>
    )
};

export default compose(
    withAuthNoAdminRedirect,
    withAuthRedirect
)(AddProductPage);