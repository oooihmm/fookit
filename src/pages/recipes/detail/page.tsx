import React, { useState } from 'react';
import styled from 'styled-components';
import { FormContainer } from 'react-hook-form-mui';

import Title from '../../../components/detail/Title';
import Comment from '../../../components/detail/Comment';
import TagForm from '../../../components/write/TagForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipes } from '../hooks';

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

const RecipesWritePage = () => {
  const navigate = useNavigate();

  const { recipeNo } = useParams();
  const { recipeData } = useRecipes();
  const detailData = recipeData.find(
    (recipe) => recipe.boardId === Number(recipeNo)
  );

  const [chips, setChips] = useState<string[]>(detailData?.ingredients ?? []);

  const recipeComments = [
    {
      reply: false,
      secret: false,
      writer: 'Olivia Bennett',
      body: 'This recipe is a taste explosion! The flavors dance on my taste buds with every bite.',
    },
    {
      reply: true,
      secret: false,
      writer: 'Ethan Hayes',
      body: `Couldn't agree more! The burst of flavors in this recipe is truly a culinary delight. I also love how each ingredient plays its part in creating a symphony of taste. What's your favorite element of the dish?`,
    },
    {
      reply: false,
      secret: true,
    },
    {
      reply: false,
      secret: false,
      writer: 'Mia Rodriguez',
      body: `Absolutely delicious! I added a twist by incorporating a bit of [unique ingredient] – it elevated the dish even more!`,
    },
  ];

  return (
    <Wrap>
      <Title
        title={`[${detailData?.category}] ${detailData?.title}`}
        author={detailData?.author}
        createdAt={detailData?.createdAt}
        views={detailData?.views}
      />
      <FormContainer defaultValues={detailData}>
        <TagForm
          chips={chips}
          setChips={setChips}
          readOnly={true}
        />
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
          <button onClick={() => navigate('/recipes/write')}>Write</button>
          <button onClick={() => navigate('/recipes')}>To List</button>
        </ContentsFooter>
      </FormContainer>
    </Wrap>
  );
};

export default RecipesWritePage;
