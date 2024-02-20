import React from 'react';
import styled from 'styled-components';
import { SelectElement, TextFieldElement } from 'react-hook-form-mui';

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
      <SelectElement
        label={'Category'}
        name={'category'}
        sx={{ width: '300px' }}
        options={[
          {
            id: 'Healthy',
            label: 'Healthy',
          },
          {
            id: 'Diet',
            label: 'Diet',
          },
          {
            id: 'Protein',
            label: 'Protein',
          },
          {
            id: 'World',
            label: 'World',
          },
        ]}
      />
      <TextFieldElement
        sx={{ width: '791px', margin: 0 }}
        margin={'dense'}
        label={'Title'}
        name={'title'}
      />
    </ContentsHeader>
  );
};

export default TitleForm;
