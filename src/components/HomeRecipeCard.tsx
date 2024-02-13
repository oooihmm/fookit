import React from "react";
import styled from "styled-components";

const BackgroundCard = styled.div`
  background-color: #fff;
  width: 180px;
  height: 250px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

const InfoCard = styled.div`
  background-color: #f8e7c8;
  width: 180px;
  height: 180px;
`;

const HomeRecipeCard = () => {
  return (
    <BackgroundCard>
      <InfoCard></InfoCard>
    </BackgroundCard>
  );
};

export default HomeRecipeCard;
