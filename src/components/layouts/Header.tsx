import React from 'react'
import styled from 'styled-components'

const DefaultHeader = styled.div`
  width: 100vw;
  min-width: 1500px;
  height: 80px;
  padding: 0 150px;
  margin: 0;

  display: flex;
  background-color: yellowgreen;
`

export const Header = () => {
  return (
    <DefaultHeader></DefaultHeader>
  )
}
