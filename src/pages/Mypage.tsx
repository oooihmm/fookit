import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Stars } from "@mui/icons-material";
import { Button, Pagination, Stack } from "@mui/material";
import MypagePosts from "../components/MypagePosts";

type TabProps = {
  isActive: boolean;
};

const Container = styled.div`
  padding: 50px 150px; // 1500 - 300 = 1200

  width: 100%;
  /* height: 100%; */
  height: calc(100vh - 50px);
`;

const Wrapper = styled.div`
  padding: 40px 80px;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */

  background-color: #fff;
  border-radius: 20px;

  min-width: 1200px;
  height: 100%;
  /* height: 100vh; */
  /* overflow: hidden; */

  flex-direction: column;
  justify-content: center;

  gap: 2rem;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PointInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeaderText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledButton = styled(Button)<TabProps>`
  && {
    background-color: #eef0ed;
    color: black;

    /* width: 150px; */
    /* height: 50px; */
    border-radius: 20px;
    font-size: 20px;

    background-color: ${(props) => (props.isActive ? "#548536" : "#eef0ed")};
    color: ${(props) => (props.isActive ? "#fff" : "black")};

    &:hover {
      background-color: #548536;
      color: #fff;
    }
    /* border: none; */
    padding: 10px 30px;
    margin: 0 20px;
    /* border-radius: 5px; */
  }
`;

const ProfileName = styled.h1`
  font-weight: 700;
  font-size: 40px;
`;

const Text = styled.div`
  font-size: 30px;
`;

const PointText = styled.div`
  color: #548536;
  font-weight: 700;
  font-size: 40px;
`;

interface IPost {
  title: string;
  author: string;
  date: string;
  views: number;
}

const Mypage: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const navigate = useNavigate();
  const board: IPost[] = [
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.01",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.02",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.03",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.04",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.05",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.06",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.07",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.08",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.09",
      views: 0,
    },
    {
      title: "게시글 제목입니다.",
      author: "김철수",
      date: "2024.02.10",
      views: 0,
    },
  ];

  const [curPage, setCurPage] = useState<number>(1);
  const [posts, setPosts] = useState<IPost[]>();

  const LAST_PAGE = Math.ceil(board.length / 5);

  useEffect(() => {
    // 작성 글
    const fetchRecipse = async () => {
      try {
      } catch (err) {}
    };
    // if (activeBtn === 1) {
    // }
  }, [activeBtn]);

  useEffect(() => {
    const newPosts = board.slice((curPage - 1) * 5, curPage * 5);
    setPosts(newPosts);
  }, []);

  const handlePageChange = (
    e: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurPage(page);

    const newPosts = board.slice((page - 1) * 5, page * 5);
    setPosts(newPosts);
    console.log(page);
  };

  const handleProfileEdit = () => {
    navigate("/profileEdit");
  };

  const handlePostClick = (Index: number) => {
    console.log(Index, activeBtn);
    return () => setActiveBtn(Index);
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Account>
            <AccountCircle
              sx={{
                color: "#ffc960",
                backgroundColor: "#fff",
                fontSize: 84,
                borderRadius: "50%",
              }}
            />
            <Button
              onClick={handleProfileEdit}
              sx={{ fontSize: "20px", color: "#2b1b09" }}
            >
              회원정보 수정
            </Button>
          </Account>
          <HeaderText>
            <ProfileName>오하람님</ProfileName>
            <PointInfo>
              <Stars
                sx={{
                  color: "#ffc960",
                  fontSize: "45px",
                }}
              />
              <Text>보유 포인트</Text>
              <PointText>999,999P</PointText>
            </PointInfo>
          </HeaderText>
        </Header>
        <div>
          <StyledButton isActive={activeBtn === 1} onClick={handlePostClick(1)}>
            작성글
          </StyledButton>
          <StyledButton isActive={activeBtn === 2} onClick={handlePostClick(2)}>
            작성댓글
          </StyledButton>
          <StyledButton isActive={activeBtn === 3} onClick={handlePostClick(3)}>
            좋아요한 글
          </StyledButton>
        </div>
        <MypagePosts posts={posts} />
        <Stack spacing={2}>
          <Pagination
            page={curPage}
            count={LAST_PAGE}
            defaultPage={1}
            onChange={handlePageChange}
          />
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default Mypage;
