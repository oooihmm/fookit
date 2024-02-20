import React from 'react';
import styled from 'styled-components';
import { FormContainer } from 'react-hook-form-mui';

import OnlyTitleForm from '../../../components/write/OnlyTitleForm';
import ImageForm from '../../../components/write/ImageForm';

const Wrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  height: 100%;
  padding: 30px 60px 90px 60px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const ContentsFooter = styled.div`
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  justify-content: flex-end;
  padding-bottom: 90px;
  margin-top: 30px;

  button {
    width: 100px;
    height: 50px;
    color: white;
    border-radius: 20px;
    background-color: #548536;
    border: none;
    font-size: 18px;
    box-shadow: none;
    cursor: pointer;
  }
`;

const CommunityWritePage = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Wrap>
      <h1>Write Community</h1>
      <FormContainer onSuccess={onSubmit}>
        <OnlyTitleForm />
        <ImageForm />
        <ContentsFooter>
          <button type='submit'>submit</button>
        </ContentsFooter>
      </FormContainer>
    </Wrap>
  );
};

export default CommunityWritePage;
