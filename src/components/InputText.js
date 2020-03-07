import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}

export default function InputText({ name, placeholder, onChange, isRequired }) {
  return (
    <InputStyled
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={isRequired}
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
  background-color: ${props => props.backgroundColor};
  margin-bottom: 30px;

  ::placeholder {
    color: #a5a5a5;
  }
`
