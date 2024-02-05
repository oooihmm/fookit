import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const ContentsWrapper = styled.div`
  padding: 0 150px;
  padding-bottom: 80px;
  width: 100vw;
  padding: 0 150px;
  height: calc(100vh - 80px);
  background-color: aliceblue;
`

export const Contents = () => {
  return (
    <ContentsWrapper>
      <Outlet />
    </ContentsWrapper>
  )
}
