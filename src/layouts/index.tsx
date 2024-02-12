import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/layouts/Header';
import { Contents } from '../components/layouts/Contents';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  max-width: max(1500px, 100vw);
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Contents />
    </Wrapper>
  );
};
