import React from 'react';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { withAuthAdminRedirect } from '../../../hoc/withAuthAdminRedirect';
import { Section } from '../../Body/Section/Section';
import { SectionTitle } from '../../Body/SectionTitle/SectionTitle';

const NoAdminPage = () => {
    return (
        <Section>
            <SectionTitle 
                title='Доступ ограничен! Вы не админ!'
            />
        </Section>
    )
}

export default compose(
    withAuthRedirect,
    withAuthAdminRedirect
)(NoAdminPage);