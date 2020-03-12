import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import ButtonAdd from '../components/form/ButtonAdd'

export default function Navigation() {
  const [toggle, setToggle] = useState(true)

  return (
    <NavLink onClick={() => setToggle(!toggle)} to="/create">
      <ButtonAdd />
    </NavLink>
  )
}
