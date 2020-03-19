import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonAdd from '../components/form/ButtonAdd'

export default function Navigation() {
  return (
    <NavLink to="/create">
      <ButtonAdd />
    </NavLink>
  )
}
