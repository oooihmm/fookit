import React from "react";
import styled from "styled-components";
import HomeRecipeCard from "../components/HomeRecipeCard";

import { LocalFireDepartment, EmojiObjectsOutlined } from "@mui/icons-material";

const HomePageContainer = styled.div`
  padding: 50px 150px; // 1500 - 300 = 1200

  width: 100%;
  /* height: 100vh; */
  height: calc(100vh - 50px);
`;

const HomePageWrapper = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #fff;
  border-radius: 20px;

  min-width: 1200px;
  height: 100%;
  /* height: 100vh; */
  /* overflow: hidden; */
`;

const RecipeCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: 45px;
`;

const CommunityTitle = styled.div`
  font-size: 25px;
`;

const CommunityTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Post = styled.div`
  width: 500px;
  height: 40px;
  /* overflow: hidden; */
  background-color: #eef0ed;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PostTitle = styled.div`
  width: 300px;
  /* width: 100%; */
`;

const CommunityPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* overflow: auto; */
`;

const CommunityContents = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const CommunityWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
`;

const Home = () => {
  return (
    <HomePageContainer>
      <HomePageWrapper>
        <HomeTitle>Recipes</HomeTitle>
        <RecipeCardWrapper>
          {[...Array(5)].map((_, index) => (
            <HomeRecipeCard key={index} />
          ))}
        </RecipeCardWrapper>
        <HomeTitle>Community</HomeTitle>
        <CommunityWrapper>
          <CommunityContents>
            <CommunityTitleWrapper>
              <LocalFireDepartment
                sx={{
                  fontSize: 30,
                }}
              />
              <CommunityTitle>Top Posts</CommunityTitle>
            </CommunityTitleWrapper>
            <CommunityPostsWrapper>
              {[...Array(4)].map((_, index) => (
                <Post key={index}>
                  <PostTitle>Title</PostTitle>
                  <div>writer</div>
                  <div>|</div>
                  <div>2024.01.28</div>
                </Post>
              ))}
            </CommunityPostsWrapper>
          </CommunityContents>
          <CommunityContents>
            <CommunityTitleWrapper>
              <EmojiObjectsOutlined
                sx={{
                  fontSize: 30,
                }}
              />
              <CommunityTitle>New Posts</CommunityTitle>
            </CommunityTitleWrapper>
            <CommunityPostsWrapper>
              {[...Array(4)].map((_, index) => (
                <Post key={index}>
                  <PostTitle>Title</PostTitle>
                  <div>writer</div>
                  <div>|</div>
                  <div>2024.01.28</div>
                </Post>
              ))}
            </CommunityPostsWrapper>
          </CommunityContents>
        </CommunityWrapper>
      </HomePageWrapper>
    </HomePageContainer>
  );
};

export default Home;
