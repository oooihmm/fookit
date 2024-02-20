import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, setUserId } from "../store/login/action";
import { Box, TextField, Button } from "@mui/material";

const Container = styled.div`
  padding: 50px 150px; // 1500 - 300 = 1200

  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  border-radius: 20px;

  min-width: 1200px;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const [memberId, setMemberId] = useState("");
  const [memberError, setMemberError] = useState(false);
  const [password, setPassword] = useState("");
  const [pwdError, setPwdError] = useState(false);
  const [loginUserId, setLoginUserId] = useState<number>(5);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("memberId:", memberId);
    console.log("Password:", password);

    setMemberError(false);
    setPwdError(false);

    let hasError = false;

    if (memberId === "") {
      setMemberError(true);
      hasError = true;
    }
    if (password === "") {
      setPwdError(true);
      hasError = true;
    }
    if (!hasError) {
      try {
        const response = await axios.post(
          "https://trailfinder.kro.kr/api/v1/login",
          {
            member_id: memberId,
            password: password,
          }
        );
        console.log(response);
        localStorage.clear();

        localStorage.setItem("isLoggedIn", String(true));
        dispatch(login());

        localStorage.setItem("userId", String(loginUserId));
        dispatch(setUserId(loginUserId));

        fetchUserData();

        navigate("/");
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response);
          if (err.response?.status === 400) {
            alert("계정이 존재하지 않습니다.");
          } else {
            console.log("login error", err);
          }
        }
      }
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://trailfinder.kro.kr/api/v1/information/${loginUserId}`
      );

      localStorage.setItem("nickname", response.data.body.nickname);

      // console.log(response.data.body.nickname);
    } catch (err) {
      console.log("fetchUserData error ", err);
    }
  };

  const navigate = useNavigate();
  const handleSignUpClick = () => {
    // 회원가입 페이지로 이동
    navigate("/signup");
  };

  return (
    <Container>
      <Wrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            overflow: "overlay",
          }}
        >
          <Box
            sx={{
              maxWidth: "500px",
              "& .MuiTextField-root": {
                margin: "0 0 40px 0",
              },
              "& .MuiButton-root": {
                height: "70px",
                margin: "0",
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title>LOGIN</Title>
            <form onSubmit={handleSubmit}>
              <TextField
                label="아이디"
                variant="outlined"
                fullWidth
                margin="normal"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                error={memberError}
                helperText={memberError && "아이디를 입력해주세요"}
              />
              <TextField
                label="비밀번호"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={pwdError}
                helperText={pwdError && "비밀번호를  입력해주세요"}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  fontSize: "25px",
                  backgroundColor: "#548536",
                  "&:hover": {
                    backgroundColor: "#94b282",
                    color: "#2b1b09",
                  },
                }}
              >
                로그인
              </Button>
            </form>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleSignUpClick}
                sx={{ mt: 2, fontSize: "20px", color: "#2b1b09" }}
              >
                회원가입
              </Button>
            </Box>
          </Box>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Login;
