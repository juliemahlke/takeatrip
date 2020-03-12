import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <FontAwesomeIcon className="icon" icon={['fas', 'suitcase']} />
        My Trips
      </Link>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  letter-spacing: 0.88px;
  text-align: center;
  margin: 0;

  a,
  a:hover {
    text-decoration: none;
    color: #3e5a80;
    font-size: 24px;
    font-family: 'Fredoka One';
  }

  .icon {
    color: #5d7ca6;
    font-size: 20px;
  }
`
