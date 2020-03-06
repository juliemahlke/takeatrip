import React from 'react'
import styled from 'styled-components/macro'

export default function InputText({ name, placeholder, onChange, required }) {
  return (
    <InputStyled
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    ></InputStyled>
  )
}

const InputStyled = styled.input`
  border-radius: 8px;
  border: solid 2px #cecece;
  background-color: #ffffff;
  padding: 10px;
  font-size: 18px;
  line-height: 1.28;
  letter-spacing: 0.36px;
  text-align: left;
  color: #a5a5a5;
  margin-bottom: 30px;
`
