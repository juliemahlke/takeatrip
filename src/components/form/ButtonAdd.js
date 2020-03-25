import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default function ButtonAdd() {
  return (
    <ButtonStyled>
      <FontAwesomeIcon icon={faPlus} />
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  position: absolute;
  top: 50px;
  left: 20px;
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
  cursor: pointer;
`
