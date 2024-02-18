import React from 'react';
import styled from 'styled-components';

const ContentsHeader = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const Title = () => {
  return (
    <ContentsHeader>
      <h1>[카테고리] Title</h1>
    </ContentsHeader>
  );
};

export default Title;
