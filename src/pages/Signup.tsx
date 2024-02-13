import React, { useState } from "react";
import styled from "styled-components";
import { Box, TextField, Button, Grid } from "@mui/material";

import SelectBox from "../components/SelectBox";

const Container = styled.div`
  padding: 50px 150px; // 1500 - 300 = 1200

  width: 100%;
  /* height: 100%; */
  height: calc(100vh - 50px);
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
  /* height: 100vh; */
  /* overflow: hidden; */
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    email: "",
    affiliation: "",
    province: "",
    district: "",
    town: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (
    province: string,
    district: string,
    town: string
  ) => {
    setFormData({
      ...formData,
      province,
      district,
      town,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
              maxWidth: "600px",

              "& .MuiTextField-root": {
                margin: "0 0 30px 0",
                height: "50px",
              },
              "& .MuiButton-root": {
                height: "70px",
                // margin: "0",
                marginTop: "30px",
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title>회원가입</Title>
            <form onSubmit={handleSubmit}>
              <TextField
                label="아이디"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="닉네임"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="비밀번호"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="비밀번호 확인"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                label="이메일"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="소속 정보"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <SelectBox onSelectChange={handleSelectChange} />
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
                회원가입
              </Button>
            </form>
          </Box>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Signup;
