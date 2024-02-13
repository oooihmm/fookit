import React from 'react';
import styled from 'styled-components';
import Post from '../../components/recipies/Post';

const Wrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  height: 100%;
  padding: 30px 60px 90px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContentsWrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
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

const ContentsFooter = styled.div`
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  justify-content: flex-end;
  padding-bottom: 90px;

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

const RecipesPage = () => {
  return (
    <Wrap>
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
      <ContentsFooter>
        <button>글쓰기</button>
      </ContentsFooter>
    </Wrap>
  );
};

export default RecipesPage;
