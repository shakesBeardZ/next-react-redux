import React from 'react';
import styled from 'styled-components';
import Head from '../components/Head';
import Clock from '../containers/Clock';
import withI18next from '../hocs/withI18next';

const Title = styled.h1`
  color: black;
  font-size: 50px;
`;

const Home = ({ t }) => (
  <>
    <Head
      title={t('title')}
      description={t('description')}
    />
    <Title>{t('welcome')}</Title>
    <Clock />
  </>
);

export default withI18next(['home', 'common'])(Home);
