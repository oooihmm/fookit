import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  height: 100%;
  padding: 30px 60px 90px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 45px;
    font-weight: bold;
  }
`;

const ContentsWrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const ContentsHeader = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0 20%;
  width: 300px;
  height: 70px;

  color: white;
  font-size: 18px;
  background-color: #548536;
  border-radius: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;

  gap: 0 20%;
  width: 791px;
  height: 70px;

  color: #6e6a69;
  font-size: 18px;
  background-color: #eef0ed;
  border-radius: 20px;
`;

const PostInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  border-radius: 20px;
  gap: 60px 0;

  h3 {
    font-size: 30px;
    font-weight: 400;
  }

  div {
    width: 200px;
    height: 50px;
    background-color: #eef0ed;
    border-radius: 20px;
  }
`;

const PostTags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const TagsBox = styled.div`
  width: 100%;
  height: 152px;
  padding: 30px;
  gap: 0 20px;
  display: flex;
  flex-direction: row;
  background-color: #eef0ed;
  border-radius: 20px;
`;

const TagsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    font-size: 30px;
    font-weight: 400;
  }

  p {
    font-size: 18px;
    color: #b8b3ae;
  }

  button {
    width: 100px;
    height: 50px;
    color: white;
    border-radius: 20px;
    background-color: #c49684;
    border: none;
    font-size: 18px;
    box-shadow: none;
    cursor: pointer;
  }
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  min-width: 120px;
  height: 50px;
  background-color: #548536;
  border-radius: 20px;
  gap: 15px;

  font-size: 18px;
  color: white;

  span {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background-color: white;

    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    color: #548536;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 152px;
  padding: 30px;
  gap: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #eef0ed;
  border-radius: 20px;
  font-size: 18px;
`;

const ContentsBody = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  min-height: 700px;
  padding: 30px;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const ContentsFooter = styled.div`
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  justify-content: flex-end;
  padding-bottom: 90px;

  button {
    width: 100px;
    height: 50px;
    color: white;
    border-radius: 20px;
    background-color: #548536;
    border: none;
    font-size: 18px;
    box-shadow: none;
    cursor: pointer;
  }
`;

const RecipeWritePage = () => {
  return (
    <Wrap>
      <h1>레시피글쓰기</h1>
      <ContentsHeader>
        <Dropdown>
          <p>카테고리</p>
          <span>|</span>
          <span>∨</span>
        </Dropdown>
        <SearchBox>제목을 입력해주세요</SearchBox>
      </ContentsHeader>
      <ContentsWrap>
        <PostInput>
          <h3>총 금액</h3>
          <div></div>
          <h3>조리 시간</h3>
          <div></div>
          <h3>칼로리</h3>
          <div></div>
        </PostInput>
        <PostTags>
          <TagsHeader>
            <h3>재료</h3>
            <p>태그를 입력해주세요 (최대 10개)</p>
          </TagsHeader>
          <TagsBox>
            <Tag>
              <p>닭가슴살</p>
              <span>
                <p>X</p>
              </span>
            </Tag>
            <Tag>
              <p>계란</p>
              <span>
                <p>X</p>
              </span>
            </Tag>
            <Tag>
              <p>양배추</p>
              <span>
                <p>X</p>
              </span>
            </Tag>
            <Tag>
              <p>스리라차 소스</p>
              <span>
                <p>X</p>
              </span>
            </Tag>
          </TagsBox>
          <TagsHeader>
            <h3>이미지 첨부</h3>
            <button>내 PC</button>
          </TagsHeader>
          <ImageBox>파일을 마우스로 끌어 오세요</ImageBox>
        </PostTags>
      </ContentsWrap>
      <ContentsBody>본문</ContentsBody>
      <ContentsFooter>
        <button>등록</button>
      </ContentsFooter>
    </Wrap>
  );
};

export default RecipeWritePage;
