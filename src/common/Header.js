import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderStyled>
      <Link className="backlink" to="/">
        <Route
          exact
          path="/trip/:id"
          render={() => (
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
          )}
        />
      </Link>

      <Link to="/">
        <FontAwesomeIcon className="icon" icon={faSuitcase} />
        My Trips
      </Link>
      <div> </div>
    </HeaderStyled>
  )
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

  .backlink {
    color: #3e5a80;
    width: 20px;
    margin-right: 0;
  }

  .icon {
    color: #5d7ca6;
    font-size: 20px;
  }
`
