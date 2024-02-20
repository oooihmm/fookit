import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Box, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { editProfile } from "../store/profile/action";
import { logout } from "../store/login/action";

import SelectBox from "../components/SelectBox";

const Container = styled.div`
  padding: 50px 150px;
  width: 100%;
  min-height: calc(100vh - 50px);
  /* min-height: 1000px; */
`;

const Wrapper = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  border-radius: 20px;

  min-width: 1200px;
  /* height: 100%; */

  min-height: 1000px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid black;
`;

const Form = styled.form`
  margin-top: 40px;
`;

const InfoTitle = styled.div`
  font-size: 25px;
  padding: 10px 0;
`;

const StyledNotice = styled.div`
  font-size: 25px;
  display: flex;
  margin-top: 14px;
`;

const RedStyled = styled.div`
  color: #a35739;
  font-size: 25px;
`;

const ProfileEdit = () => {
  const navigate = useNavigate();
  const userId = Number(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.profile.formData);

  const [formData, setFormData] = useState({
    memberId: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    email: "",
    belong: "",
    region: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `https://trailfinder.kro.kr/api/v1/information/${userId}`
          );

          dispatch(editProfile(response.data.body));
          // console.log("fetch", response.data.body);
        } catch (err) {
          console.log("fetchUserData error ", err);
        }
      } else console.log("Not valid UserId");
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    // console.log(formData, userData);
    if (userData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        memberId: userData.memberId,
        nickname: userData.nickname,
        password: userData.password,
        confirmPassword: "",
        email: userData.e_mail,
        belong: userData.belong || "",
        region: userData.region || "",
      }));
    }
  }, [userData]);

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
      region: `${province} ${district} ${town}`,
    });
  };

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

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.put(
          `https://trailfinder.kro.kr/api/v1/edit-member/${userId}`,
          {
            member_id: formData.memberId,
            password: formData.password,
            nickname: formData.nickname,
            e_mail: formData.email,
            belong: formData.belong,
            region: formData.region,
          }
        );

        // console.log("response", response, formData);
        dispatch(
          editProfile({
            ...userData,
            memberId: formData.memberId,
            nickname: formData.nickname,
            e_mail: formData.email,
            belong: formData.belong,
            region: formData.region,
          })
        );

        alert("회원 정보가 수정되었습니다.");
        navigate("/mypage");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("validate fail");
    }
  };

  const handleDelete = async (e: React.FormEvent) => {
    try {
      await axios.put(`https://trailfinder.kro.kr/api/v1/suspension/${userId}`);
      alert("회원 탈퇴가 완료되었습니다.");

      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>회원정보 수정</Title>
        <Form onSubmit={handleEditSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <InfoTitle>아이디</InfoTitle>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                label="아이디"
                name="memberId"
                value={formData.memberId}
                onChange={handleChange}
                error={errors.memberId !== ""}
                helperText={errors.memberId}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor: "#EEF0ED",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InfoTitle>닉네임</InfoTitle>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                label="닉네임"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor: "#EEF0ED",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InfoTitle>비밀번호</InfoTitle>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                label="비밀번호"
                type="password"
                name="password"
                onChange={handleChange}
                error={errors.password !== ""}
                helperText={errors.password}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor: "#EEF0ED",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InfoTitle>비밀번호 확인</InfoTitle>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                label="비밀번호 확인"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                error={errors.confirmPassword !== ""}
                helperText={errors.confirmPassword}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor: "#EEF0ED",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InfoTitle>이메일</InfoTitle>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                label="이메일"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email !== ""}
                helperText={errors.email}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor: "#EEF0ED",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InfoTitle>소속 정보</InfoTitle>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                label="소속 정보"
                name="belong"
                value={formData.belong || ""}
                onChange={handleChange}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor: "#EEF0ED",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <InfoTitle>지역</InfoTitle>
            </Grid>
            <Grid item xs={9}>
              <SelectBox
                onSelectChange={handleSelectChange}
                selectedRegion={formData.region}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              type="submit"
              sx={{
                margin: "42px 0 60px 0",
                padding: "10px 24px",
                fontSize: "25px",
                borderRadius: "10px",
                backgroundColor: "#548536",
                "&:hover": {
                  backgroundColor: "#94b282",
                  color: "#2b1b09",
                },
              }}
            >
              수정 완료
            </Button>
          </Box>
        </Form>
        <div>
          <Title>회원 탈퇴</Title>
          <StyledNotice>
            <RedStyled>탈퇴한 계정은 재사용 및 복구가 불가</RedStyled>하오니
            신중하게 선택하시기 바랍니다.
          </StyledNotice>
          <div>
            <Button
              variant="contained"
              type="submit"
              onClick={handleDelete}
              sx={{
                marginTop: "42px",
                padding: "10px 24px",
                fontSize: "25px",
                backgroundColor: "#A35739",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#C49684",
                  color: "#2b1b09",
                },
              }}
            >
              회원 탈퇴
            </Button>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ProfileEdit;
