import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function ButtonAdd() {
  const [toggle, setToggle] = useState(true)

  useEffect(() => {}, [toggle])

  return (
    <ButtonStyled onClick={() => setToggle(!toggle)} to="/create">
      <FontAwesomeIcon icon={['fas', 'plus']} />
    </ButtonStyled>
  )
}

const ButtonStyled = styled(NavLink)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-family: 'Fredoka One';
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.4px;
  text-align: center;
  background-color: #f85a8e;
  color: #ffffff;
  border: 0;
  padding: 10px;
  text-decoration: none;
`
