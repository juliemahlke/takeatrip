import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, Route, useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory()

  return (
    <HeaderStyled>
      <BackButton onClick={handleClick}>
        <Route
          exact
          path={['/trip/:id', '/trip/:id/create-note']}
          render={() => (
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
          )}
        />
      </BackButton>

      <Link to="/">
        <FontAwesomeIcon className="icon" icon={faSuitcase} />
        My Trips
      </Link>
      <div></div>
    </HeaderStyled>
  )

  function handleClick() {
    history.goBack()
  }
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  letter-spacing: 0.88px;
  text-align: center;
  margin: 0;
  padding: 0 20px;
  border-bottom: solid 1px #e5e5e5;

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

const BackButton = styled.button`
  border: 0;
  padding: 0;
  background: none;
  color: #3e5a80;
  width: 20px;
  margin-right: 0;
`
