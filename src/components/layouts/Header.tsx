import React from 'react';
import styled from 'styled-components';

import guideline from '../../assets/icons/guideline.png';
import headerProfile from '../../assets/icons/headerProfile.png';

const DefaultHeader = styled.div`
  min-width: 1200px;
  height: 80px;
  padding: 0 150px;
  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: yellowgreen;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Header = () => {
  return (
    <DefaultHeader>
      <Container>
        <h1>LOGO</h1>
        <p>레시피</p>
        <p>커뮤니티</p>
      </Container>
      <Container>
        <Icon
          src={guideline}
          alt='guideline'
        />
        <Icon
          src={headerProfile}
          alt='headerProfile'
        />
      </Container>
    </DefaultHeader>
  );
};
