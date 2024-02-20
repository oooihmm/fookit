import React from 'react';
import styled from 'styled-components';

import detailProfile from '../../assets/icons/detailProfile.png';
import detailSecret from '../../assets/icons/detailSecret.png';

const CommentWrap = styled.div<{ reply?: boolean }>`
  width: 100%;
  padding: 0 30px 30px 0;
  padding-left: ${(props) => (props.reply ? '60px' : 0)};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  img {
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
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

    button {
      color: #b8b3ae;
      background-color: white;
      border: none;
      box-shadow: none;
      cursor: pointer;
      font-size: 15px;
    }
  }
`;

const SecretReply = styled.div`
  width: 100%;
  padding: 45px;
  background-color: #eef0ed;
  border-radius: 20px;
  gap: 15px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 16px;
    height: 21px;
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
  }
`;

const Comment = ({
  reply,
  secret,
  writer,
  body,
}: {
  reply: boolean;
  secret: boolean;
  writer?: string;
  body?: string;
}) => {
  return (
    <CommentWrap reply={reply}>
      <img
        hidden={secret}
        src={detailProfile}
        alt='detailProfile'
      />
      {secret ? (
        <SecretReply>
          <img
            src={detailSecret}
            alt='detailSecret'
          />
          <p>This is a private comment.</p>
        </SecretReply>
      ) : (
        <CommentBody>
          <h3>{writer}</h3>
          <p>{body}</p>
          <span>
            <p>2024.02.14</p>
            <p>21:49</p>
            <button>Reply</button>
          </span>
        </CommentBody>
      )}
    </CommentWrap>
  );
};

export default Comment;
