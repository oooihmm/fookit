import React from 'react';
import styled from 'styled-components';
import Post from '../../components/recipies/Post';

const ContentsWrap = styled.div`
  padding: 30px 60px 90px 60px;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const ContentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 45px;
    font-weight: bold;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px 10%;
`;

const RecipesPage = () => {
  return (
    <ContentsWrap>
      <ContentsHeader>
        <h1>Recipes</h1>
      </ContentsHeader>
      <Contents>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Contents>
    </ContentsWrap>
  );
};

export default RecipesPage;
