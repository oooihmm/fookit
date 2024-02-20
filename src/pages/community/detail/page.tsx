import React from 'react';
import styled from 'styled-components';
import { FormContainer } from 'react-hook-form-mui';

import Title from '../../../components/detail/Title';
import Comment from '../../../components/detail/Comment';
import ImageForm from '../../../components/write/ImageForm';
import { useNavigate, useParams } from 'react-router-dom';
import useCommunity from '../hooks';

const Wrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  height: 100%;
  padding: 30px 60px 90px 60px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const ContentsBody = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const CommentContainer = styled.div`
  width: 100%;
  min-height: 500px;
  margin-bottom: -20px;

  h2 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

const ContentsFooter = styled.div`
  min-width: 1200px;
  max-width: 1500px;

  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding-bottom: 90px;
  gap: 0 15px;

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

const CommunityWritePage = () => {
  const navigate = useNavigate();

  const { communityNo } = useParams();
  const { communityData } = useCommunity();
  const detailData = communityData.find(
    (community) => community.boardId === Number(communityNo)
  );

  const recipeComments = [
    {
      reply: false,
      secret: false,
      writer: 'Owen Mitchell',
      body: `Oh, this idea for utilizing surplus things looks fantastic! I'll definitely try it out with my friends this weekend. It's a clever way to make good use of those excess thing. Thanks for sharing!`,
    },
    {
      reply: true,
      secret: false,
      writer: 'Sebastian Cole',
      body: `Absolutely agree! Finding innovative ways to use surplus items is both eco-friendly and resourceful. Let me know how your weekend experiment turns out – always on the lookout for clever ideas like these!`,
    },
    {
      reply: true,
      secret: false,
      writer: 'Lily Thompson',
      body: `Love the creativity in repurposing excess items! It's inspiring to see how people can turn 'leftovers' into something enjoyable. Thanks for sharing, and I'm excited to hear about your experience trying it out with friends. Cheers to resourcefulness!`,
    },
    {
      reply: false,
      secret: false,
      writer: 'Caleb Anderson',
      body: `When there's no one to share your extra things with, looking for connections is a great idea. Following the suggested methods might lead to creating positive connections and reducing food waste. It's also eco-friendly and a wonderful way to help neighbors in need.`,
    },
  ];

  return (
    <Wrap>
      <Title
        title={`${detailData?.title}`}
        author={detailData?.author}
        createdAt={detailData?.createdDate}
        views={detailData?.views}
      />
      <FormContainer defaultValues={detailData}>
        <ImageForm readOnly={true} />
        <ContentsBody>
          <CommentContainer>
            <h2>Comments</h2>
            {recipeComments.map((comment) => (
              <Comment
                reply={comment.reply}
                secret={comment.secret}
                writer={comment.writer}
                body={comment.body}
              />
            ))}
          </CommentContainer>
        </ContentsBody>
        <ContentsFooter>
          <ContentsFooter>
            <button onClick={() => navigate('/community/write')}>Write</button>
            <button onClick={() => navigate('/community')}>To List</button>
          </ContentsFooter>
        </ContentsFooter>
      </FormContainer>
    </Wrap>
  );
};

export default CommunityWritePage;
