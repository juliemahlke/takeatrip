import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import ButtonCancel from './ButtonCancel'
import InputText from './InputText'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

Button.propTypes = {
  addTripData: PropTypes.func,
}

export default function CreateTrip({ addTripData }) {
  const [disable, setDisable] = useState(true)
  const history = useHistory()

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ButtonCancel />
      <h1>Erstelle einen neuen Trip!</h1>
      <label>
        <strong>Wohin</strong> möchtest Du reisen?
      </label>
      <InputText
        name="title"
        placeholder="Titel des Trips"
        onChange={handleChange}
        isRequired={true}
      ></InputText>

      <label>
        <strong>Wann</strong> möchtest du verreisen?
      </label>
      <InputText
        name="date"
        placeholder="Reisezeitraum"
        onChange={handleChange}
        required={false}
      ></InputText>

      <Button content="Trip speichern" disable={disable} />
    </FormStyled>
  )

  function handleSubmit(event) {
    const form = event.target
    const title = form.title
    const date = form.date
    event.preventDefault()
    addTripData({ title: title.value, date: date.value })
    history.push('/')
  }

  function handleChange(event) {
    event.target.value === '' ? setDisable(true) : setDisable(false)
  }
}

const FormStyled = styled.form`
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 30px;
  text-align: center;
  display: grid;

  label {
    font-size: 18px;
    line-height: 1.28;
    letter-spacing: 0.36px;
    text-align: center;
    color: #505050;
    display: block;
    margin-bottom: 15px;
  }
`
