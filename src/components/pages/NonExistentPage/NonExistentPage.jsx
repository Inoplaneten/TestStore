import React from 'react';
import { Section } from '../../Body/Section/Section';
import { SectionTitle } from '../../Body/SectionTitle/SectionTitle';

const NonExistentPage = () => {
    return (
        <Section>
            <SectionTitle 
                title='Ошибка 404! Такой страницы не существует'
            />
        </Section>
    )
};

export default NonExistentPage;