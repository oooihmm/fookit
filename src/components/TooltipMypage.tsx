import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Home, Logout } from "@mui/icons-material";

const TooltipContainer = styled.div<ToolTipMypageProps>`
  position: absolute;
  top: 70px;
  right: -80px;

  border-radius: 20px;
  box-shadow: rgba(221, 223, 224, 0.4) 0px 4px 8px;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
  pointer-events: all;
  visibility: hidden;

  ${(props) =>
    props.isHover &&
    `
    visibility: visible;
    opacity: 1;
    transition: 0.25s all ease;
    transition-delay: 0s;
    transform: translateY(8px) scale(1);
  `}
`;

const TooltipContent = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: 400px;
  height: 300px;
  overflow: hidden;
`;

const ContentBackground = styled.div`
  width: 400px;
  height: 70px;
  background-color: #f8e7c8;
`;

const TooltipArrow = styled.div`
  color: #fff;
  top: -15px;
  right: 94px;

  position: absolute;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #f8e7c8;
`;

const ProfileInfo = styled.div`
  position: relative;
  top: -42px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ProfileName = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

const TooltipBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: #eef0ed;
  margin: 0 30px;
  border-radius: 20px;
  height: 40px;

  cursor: pointer;
`;

const TextMyPage = styled.div`
  font-size: 15px;
`;

const TooltipBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

interface ToolTipMypageProps {
  isHover: boolean;
}

const ToolTipMypage: React.FC<ToolTipMypageProps> = ({ isHover }) => {
  const navigate = useNavigate();
  const handleMypageBtnClick = () => {
    navigate("/mypage");
  };

  return (
    <TooltipContainer isHover={isHover}>
      <TooltipContent>
        <ContentBackground />
        <ProfileInfo>
          <AccountCircle
            sx={{
              color: "#ffc960",
              backgroundColor: "#fff",
              fontSize: 84,
              borderRadius: "50%",
            }}
          />
          <ProfileName>오하람님</ProfileName>
          <TooltipBtnWrapper>
            <TooltipBtn onClick={handleMypageBtnClick}>
              <Home sx={{ fontSize: 30 }} />
              <TextMyPage>마이페이지</TextMyPage>
            </TooltipBtn>
            <TooltipBtn>
              <Logout sx={{ fontSize: 30 }} />
              <TextMyPage>로그아웃</TextMyPage>
            </TooltipBtn>
          </TooltipBtnWrapper>
        </ProfileInfo>
      </TooltipContent>
      <TooltipArrow />
    </TooltipContainer>
  );
};

export default ToolTipMypage;
