import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const ContentsWrapper = styled.div`
  padding: 70px 150px 80px 150px;
  min-width: 1200px;
  min-height: calc(100vh - 80px);
  background-color: #eef0ed;

  display: flex;
  justify-content: center;
`;

export const Contents = () => {
  return (
    <ContentsWrapper>
      <Outlet />
    </ContentsWrapper>
  );
};
