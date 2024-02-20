import React from 'react';
import styled from 'styled-components';
import recipesProfile from '../../assets/icons/recipesProfile.png';
import recipesHeart from '../../assets/icons/recipesHeart.png';
import { Recipe } from '../../pages/recipes/hooks';
import { useNavigate } from 'react-router-dom';

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  #image {
    width: 230px;
    height: 230px;
    background-color: #f8e7c8;
    margin-bottom: 5px;
  }

  #post-title {
    font-size: 25px;
    font-weight: 600;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 3px;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: -3px;
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
      width: 13px;
      height: 13px;
      margin-bottom: 2px;
    }
  }

  p {
    margin: 0;
    font-size: 13px;
  }
`;

const Post = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();
  return (
    <Posts onClick={() => navigate(`/recipes/${recipe.boardId}/detail`)}>
      <div id='image'></div>
      <span id='post-title'>
        {recipe.title.length < 17
          ? recipe.title
          : recipe.title.slice(0, 17) + '...'}
      </span>
      <UserInfo>
        <img
          src={recipesProfile}
          alt='recipesProfile'
        />
        <p>{recipe.author}</p>
      </UserInfo>
      <PostInfo>
        <p>{recipe.views} views</p>
        <span id='like'>
          <img
            src={recipesHeart}
            alt='recipesHeart'
          />
          <p>{recipe.likes}</p>
        </span>
      </PostInfo>
    </Posts>
  );
};

export default Post;
