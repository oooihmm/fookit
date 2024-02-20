import React from "react";
import styled from "styled-components";
import recipeImg1 from "../assets/images/lunch1.jpg";
import recipeImg2 from "../assets/images/lunch2.jpg";
import recipeImg3 from "../assets/images/lunch3.jpg";
import recipeImg4 from "../assets/images/lunch4.jpg";
import recipeImg5 from "../assets/images/lunch5.jpg";

import { useNavigate } from "react-router-dom";

const BackgroundCard = styled.div`
  background-color: #fff;
  width: 180px;
  height: 250px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ImgCard = styled.div`
  background-color: #f8e7c8;
  width: 180px;
  height: 180px;

  display: flex;
  justify-content: center;
`;

const InfoCard = styled.div`
  height: 70px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
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

interface IRecipeCardProps {
  recipe: IRecipe;
  idx: number;
}

const HomeRecipeCard: React.FC<IRecipeCardProps> = ({ recipe, idx }) => {
  const navigate = useNavigate();

  const recipeImages = [recipeImg1, recipeImg2, recipeImg3, recipeImg4];

  const handleRecipeClick = () => {
    navigate(`/recipes/${recipe.boardId}/detail`);
  };

  // console.log(recipe, idx);

  return (
    <BackgroundCard onClick={handleRecipeClick}>
      <ImgCard>
        <img style={{ height: "100%" }} src={recipeImages[idx]} />
      </ImgCard>
      <InfoCard>{recipe.title}</InfoCard>
    </BackgroundCard>
  );
};

export default HomeRecipeCard;
