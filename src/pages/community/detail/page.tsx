import React from 'react';
import styled from 'styled-components';
import { FormContainer } from 'react-hook-form-mui';

import Title from '../../../components/detail/Title';
import Comment from '../../../components/detail/Comment';
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

const ContentsBody = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const BodyContainer = styled.div`
  width: 100%;
  min-height: 500px;
`;

const LikeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 180px;
    height: 50px;
    color: white;
    font-size: 18px;
    background-color: #548536;
    border-radius: 20px;
    border: none;
    font-size: 18px;
    box-shadow: none;
    cursor: pointer;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  min-height: 500px;

  h2 {
    font-size: 30px;
    font-weight: 600;
  }
`;

const Line = styled.hr`
  width: 100%;
  color: EEF0ED;
  margin: 60px 0;
`;

const ContentsFooter = styled.div`
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding-bottom: 90px;
  gap: 0 15px;

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
  return (
    <Wrap>
      <Title />
      <FormContainer disabled={true}>
        <ImageForm />
        <ContentsBody>
          <ContentsBody>
            <BodyContainer>본문</BodyContainer>
            <LikeButtonContainer>
              <button>❤︎ 좋아요 nn개</button>
            </LikeButtonContainer>
            <Line />
            <CommentContainer>
              <h2>댓글</h2>
              <Comment
                reply={false}
                secret={false}
              />
              <Comment
                reply={false}
                secret={true}
              />
              <Comment
                reply={false}
                secret={false}
              />
              <Comment
                reply={true}
                secret={false}
              />
            </CommentContainer>
          </ContentsBody>
        </ContentsBody>
        <ContentsFooter>
          <button>글쓰기</button>
          <button>목록으로</button>
        </ContentsFooter>
      </FormContainer>
    </Wrap>
  );
};

export default CommunityWritePage;
