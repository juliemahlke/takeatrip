import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonAdd from '../components/form/ButtonAdd'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <FooterStyled>
      <NavigationStyled>
        <LinkStyled exact to="">
          <FontAwesomeIcon icon={faList} />
        </LinkStyled>
        <LinkStyled to="/create">
          <ButtonAdd />
        </LinkStyled>
        <LinkStyled to="/bookmarks">
          <FontAwesomeIcon icon={faBookmark} />
        </LinkStyled>
      </NavigationStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  width: 92vw;
  left: 50%;
  transform: translate(-50%);
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  background: #ffffff;
`

const NavigationStyled = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 55px;
`

const LinkStyled = styled(NavLink)`
  width: 170px;
  font-size: 22px;
  color: #b1b1b1;

  &.active {
    color: #3e5a80;
  }
`
