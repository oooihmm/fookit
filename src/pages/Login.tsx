import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="비밀번호"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
