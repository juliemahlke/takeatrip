import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ buttonText }) {
  return <ButtonPrimary>{buttonText}</ButtonPrimary>
}

const ButtonPrimary = styled.button`
  border-radius: 24px;
  font-family: 'Fredoka One';
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 1.2px;
  text-align: center;
  background-color: #f85a8e;
  color: #ffffff;
  border: 0;
  padding: 10px 30px;
  display: inline-block;
  margin: 30px;
`
