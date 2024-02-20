import React from 'react';
import styled from 'styled-components';

import detailProfile from '../../assets/icons/detailProfile.png';
import detailSubscribe from '../../assets/icons/detailSubscribe.png';
import comments from '../../assets/icons/comments.png';

const ContentsHeader = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
  border-radius: 20px;
  margin-bottom: 30px;

  img {
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  button {
    width: 80px;
    height: 36px;
    gap: 5px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background-color: #a35739;
    border: 0;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;

  h3 {
    font-weight: bold;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    color: #b8b3ae;
    gap: 10px;
  }
`;

const Title = () => {
  return (
    <ContentsHeader>
      <h1>[카테고리] Title</h1>
      <HeaderWrap>
        <ProfileWrap>
          <img
            src={detailProfile}
            alt='detailProfile'
          />
          <CommentBody>
            <h3>user name</h3>
            <span>
              <p>2024.02.14</p>
              <p>view 000</p>
            </span>
          </CommentBody>
          <button>
            <img
              src={detailSubscribe}
              alt='detailSubscribe'
            />
            <p>구독</p>
          </button>
        </ProfileWrap>
        <CommentWrap>
          <img
            src={comments}
            alt='comments'
          />
          댓글 nnn개
        </CommentWrap>
      </HeaderWrap>
    </ContentsHeader>
  );
};

export default Title;
