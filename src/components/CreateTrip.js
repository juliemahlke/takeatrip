import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import ButtonCancel from './ButtonCancel'
import InputText from './InputText'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function CreateTrip({ addTripData }) {
  const setTrip = useState({})

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
      ></InputText>

      <label>
        <strong>Wann</strong> möchtest du verreisen?
      </label>
      <InputText
        name="date"
        placeholder="Reisezeitraum"
        onChange={handleChange}
      ></InputText>

      <Button content="Trip speichern" disabled="disabled" to="/" />
    </FormStyled>
  )

  function handleSubmit(event) {
    const form = event.target
    const title = form.title
    const date = form.date
    event.preventDefault()
    addTripData({ title: title.value, date: date.value })
    form.reset()
    form[0].focus()
  }

  function handleChange(event) {
    setTrip(event.target.value)
  }
}

const FormStyled = styled.form`
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 40px;
  text-align: center;

  label {
    font-size: 18px;
    line-height: 1.28;
    letter-spacing: 0.36px;
    text-align: center;
    color: #505050;
    display: block;
    margin-bottom: 15px;
  }

  input {
    border-radius: 8px;
    border: solid 2px #cecece;
    background-color: #ffffff;
    padding: 10px;
    font-size: 18px;
    line-height: 1.28;
    letter-spacing: 0.36px;
    text-align: left;
    color: #a5a5a5;
  }
`
