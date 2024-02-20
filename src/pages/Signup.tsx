import React, { useState } from "react";
import styled from "styled-components";
import { Box, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // const formData = useSelector((state: RootState) => state.profile.formData);
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    memberId: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    email: "",
    belong: "",
    region: "",
  });

  const [errors, setErrors] = useState({
    memberId: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!/^[a-zA-z0-9]{4,12}$/.test(formData.memberId)) {
      newErrors.memberId = "4-12사이 대소문자 또는 숫자만 입력하시오";
      isValid = false;
    } else {
      newErrors.memberId = "";
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      newErrors.password =
        "최소 8자 이상 적어도 하나의 영문자와 숫자가 포함되어야합니다.";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
      isValid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // dispatch(editProfile({ ...formData, [name]: value }));
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
    // dispatch(
    //   editProfile({
    //     ...formData,
    //     region: `${province} ${district} ${town}`,
    //   })
    // );
    setFormData({
      ...formData,
      region: `${province} ${district} ${town}`,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://trailfinder.kro.kr/api/v1/sign-up",
          {
            member_id: formData.memberId,
            password: formData.password,
            nickname: formData.nickname,
            e_mail: formData.email,
            belong: formData.belong,
            region: formData.region,
          }
        );
        console.log(response.data);
        alert("회원가입 성공!");
        // localStorage.setItem("userData", JSON.stringify(response.data));
        // localStorage.setItem("isLoggedIn", String(true));

        navigate("/");
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response);
          if (err.response?.status === 400) {
            alert("이미 존재하는 계정입니다.");
          } else {
            console.log("singup error ", err);
          }
        }
      }
    } else {
      console.log("validate fail");
    }
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
                // height: "50px",
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
                name="memberId"
                value={formData.memberId}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                error={errors.memberId !== ""}
                helperText={errors.memberId}
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
                    error={errors.password !== ""}
                    helperText={errors.password}
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
                    error={errors.confirmPassword !== ""}
                    helperText={errors.confirmPassword}
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
                error={errors.email !== ""}
                helperText={errors.email}
              />
              <TextField
                label="소속 정보"
                name="belong"
                value={formData.belong}
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
