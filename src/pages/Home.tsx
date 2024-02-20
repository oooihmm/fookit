import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LocalFireDepartment, EmojiObjectsOutlined } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import HomeRecipeCard from "../components/HomeRecipeCard";

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

  cursor: pointer;
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

interface IRecipe {
  boardId: number;
  author: string;
  title: string;
  body: string;
  imgUrl: string | null;
  views: number;
  likes: number;
  totalTime: number;
  totalKcal: number;
  totalPrice: number;
  category: string;
  createdAt: string;
  ingredients: string[];
  comments: string[] | null;
}

interface IMember {
  createdAt: string;
  updatedAt: string;
  userId: number;
  memberId: string;
  password: string;
  nickname: string;
  e_mail: string;
  belong: string;
  region: string;
  reward: number;
  followings: [];
  followers: [];
  status: string;
}

interface ICommunity {
  title: string;
  member: IMember;
  boardId: number;
  createdDate: string;
  likes: number;
}

const Home = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [topCommunity, setTopCommunity] = useState<ICommunity[]>([]);
  const [newCommunity, setNewCommunity] = useState<ICommunity[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://trailfinder.kro.kr/api/v1/recipe/recipes"
        );
        const sortedRecipes = response.data.data.sort(
          (a: IRecipe, b: IRecipe) => b.likes - a.likes
        );
        const slicedRecipes = sortedRecipes.slice(0, 5);
        setRecipes(slicedRecipes);
        // console.log(slicedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchCommunity = async () => {
      try {
        const response = await axios.get(
          "https://trailfinder.kro.kr/api/v1/community"
        );
        const sortedTopCommunity = response.data.data.sort(
          (a: ICommunity, b: ICommunity) => b.likes - a.likes
        );
        const slicedTopCommunity = sortedTopCommunity.slice(0, 4);
        setTopCommunity(slicedTopCommunity);

        const sortedNewCommunity = response.data.data.sort(
          (a: ICommunity, b: ICommunity) => {
            const dateA = new Date(a.createdDate);
            const dateB = new Date(b.createdDate);

            return dateB.getTime() - dateA.getTime();
          }
        );
        const slicedNewCommunity = sortedNewCommunity.slice(0, 4);
        setNewCommunity(slicedNewCommunity);

        // console.log(slicedNewCommunity);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchCommunity();
  }, []);

  const navigate = useNavigate();

  return (
    <HomePageContainer>
      <HomePageWrapper>
        <HomeTitle>Recipes</HomeTitle>
        <RecipeCardWrapper>
          {recipes &&
            recipes.map((recipe, index) => (
              <HomeRecipeCard key={index} recipe={recipe} idx={index} />
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
              {topCommunity &&
                topCommunity.map((post, index) => {
                  const dateStr = post.createdDate;
                  const result = dateStr.substring(0, 10).replace(/-/g, ".");

                  const handlePostClick = () => {
                    navigate(`/community/${post.boardId}/detail`);
                  };

                  return (
                    <Post key={index} onClick={handlePostClick}>
                      <PostTitle>{post.title}</PostTitle>
                      <div>{post.member.nickname}</div>
                      <div>|</div>
                      <div>{result}</div>
                    </Post>
                  );
                })}
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
              {newCommunity &&
                newCommunity.map((post, index) => {
                  const dateStr = post.createdDate;
                  const result = dateStr.substring(0, 10).replace(/-/g, ".");

                  const handlePostClick = () => {
                    navigate(`/community/${post.boardId}/detail`);
                  };

                  return (
                    <Post key={index} onClick={handlePostClick}>
                      <PostTitle>{post.title}</PostTitle>
                      <div>{post.member.nickname}</div>
                      <div>|</div>
                      <div>{result}</div>
                    </Post>
                  );
                })}
            </CommunityPostsWrapper>
          </CommunityContents>
        </CommunityWrapper>
      </HomePageWrapper>
    </HomePageContainer>
  );
};

export default Home;
