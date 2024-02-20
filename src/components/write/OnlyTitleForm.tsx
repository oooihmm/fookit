import React from 'react';
import styled from 'styled-components';
import { TextFieldElement } from 'react-hook-form-mui';

const ContentsHeader = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
  margin-bottom: 30px;

  div {
    background-color: #eef0ed;
    border-radius: 20px;
  }
`;

const TitleForm = () => {
  return (
    <ContentsHeader>
      <TextFieldElement
        sx={{ width: '100%', margin: 0 }}
        label={'Title'}
        name={'title'}
      />
    </ContentsHeader>
  );
};

export default TitleForm;
