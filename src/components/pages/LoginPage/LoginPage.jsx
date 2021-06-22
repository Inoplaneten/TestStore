import React from 'react';
import { compose } from 'redux';
import { withAuthAdminRedirect } from '../../../hoc/withAuthAdminRedirect';
import { withAuthUserRedirect } from '../../../hoc/withAuthUserRedirect';
import { Section } from '../../Body/Section/Section';
import { SectionTitle } from '../../Body/SectionTitle/SectionTitle';
import FormUserStatusContainer from '../../Body/Form/FormUserStatusContainer';

const LoginPage = () => {
    return (
        <Section>
            <SectionTitle 
                title='Войдите как Пользователь либо Админ'
            />
            <FormUserStatusContainer/>
        </Section>
    )
};

export default compose(
    withAuthAdminRedirect,
    withAuthUserRedirect
)(LoginPage);