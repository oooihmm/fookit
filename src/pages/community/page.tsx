import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CommunityTable from '../../components/community/CommunityTable';
import useCommunity from './hooks';

const Wrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  height: 100%;
  padding: 30px 60px 90px 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContentsWrap = styled.div`
  min-width: 1200px;
  max-width: 1500px;
  padding: 30px 60px 90px 60px;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 20px;
  gap: 30px;
`;

const ContentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 45px;
    font-weight: bold;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px 10%;
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

const CommunityPage = () => {
  const navigate = useNavigate();
  const { communityData } = useCommunity();

  return (
    <Wrap>
      <ContentsWrap>
        <ContentsHeader>
          <h1>Community</h1>
        </ContentsHeader>
        <Contents>
          <CommunityTable communityData={communityData} />
        </Contents>
      </ContentsWrap>
      <ContentsFooter>
        <button onClick={() => navigate('/community/write')}>Write</button>
      </ContentsFooter>
    </Wrap>
  );
};

export default CommunityPage;
