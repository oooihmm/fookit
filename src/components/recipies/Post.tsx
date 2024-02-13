import React from 'react';
import styled from 'styled-components';
import recipesProfile from '../../assets/icons/recipesProfile.png';
import recipesHeart from '../../assets/icons/recipesHeart.png';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  #image {
    width: 180px;
    height: 180px;
    background-color: #f8e7c8;
  }

  #post-title {
    font-size: 15px;
    font-weight: 500;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    margin: 0;
    font-size: 13px;
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;

  #like {
    display: flex;
    align-items: center;
    gap: 3px;

    img {
      width: 8px;
      height: 8px;
    }

    p {
      line-height: 3px;
    }
  }

  p {
    margin: 0;
    font-size: 10px;
  }
`;

const Post = () => {
  return (
    <Posts>
      <div id='image'></div>
      <span id='post-title'>게시글 제목입니다</span>
      <UserInfo>
        <img
          src={recipesProfile}
          alt='recipesProfile'
        />
        <p>user name</p>
      </UserInfo>
      <PostInfo>
        <p>조회수 187만</p>
        <span id='like'>
          <img
            src={recipesHeart}
            alt='recipesHeart'
          />
          <p>53</p>
        </span>
      </PostInfo>
    </Posts>
  );
};

export default Post;
