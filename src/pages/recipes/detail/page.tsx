import React from 'react';
import styled from 'styled-components';

import Title from '../../../components/detail/Title';
import Comment from '../../../components/detail/Comment';

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
  padding: 30px;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const BodyContainer = styled.div`
  width: 100%;
  min-height: 500px;
`;

const LikeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 180px;
    height: 50px;
    color: white;
    font-size: 18px;
    background-color: #548536;
    border-radius: 20px;
    border: none;
    font-size: 18px;
    box-shadow: none;
    cursor: pointer;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  min-height: 500px;
  margin-bottom: 60px;

  h2 {
    font-size: 30px;
    font-weight: 600;
  }
`;

const ContentsFooter = styled.div`
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  justify-content: flex-end;
  padding-bottom: 90px;
  gap: 0 30px;

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

const RecipeDetailPage = () => {
  return (
    <Wrap>
      <Title />
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
          <ImageBox>image</ImageBox>
        </PostTags>
      </ContentsWrap>
      <ContentsBody>
        <BodyContainer>본문</BodyContainer>
        <LikeButtonContainer>
          <button>❤︎ 좋아요 nn개</button>
        </LikeButtonContainer>
        <CommentContainer>
          <h2>댓글</h2>
          <Comment
            reply={false}
            secret={false}
          />
          <Comment
            reply={false}
            secret={true}
          />
          <Comment
            reply={false}
            secret={false}
          />
          <Comment
            reply={true}
            secret={false}
          />
        </CommentContainer>
      </ContentsBody>
      <ContentsFooter>
        <button>글쓰기</button>
        <button>목록으로</button>
      </ContentsFooter>
    </Wrap>
  );
};

export default RecipeDetailPage;
