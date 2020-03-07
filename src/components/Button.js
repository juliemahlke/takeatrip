import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ content, disable }) {
  return <ButtonPrimary disabled={disable}>{content}</ButtonPrimary>
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
  margin: 30px 0;

  &:disabled {
    background: grey;
    color: lightgrey;
  }
`
