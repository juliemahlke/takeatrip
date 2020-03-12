import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <HeaderStyled>
      <FontAwesomeIcon icon={['fas', 'plus']} />
      <h1>My Trips</h1>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  h1 {
    font-size: 22px;
    letter-spacing: 0.88px;
    text-align: center;
    color: #3e5a80;
    margin: 0;
  }
`
