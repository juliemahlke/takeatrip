import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../form/Button'
import ButtonCancel from '../form/ButtonCancel'
import InputText from '../form/InputText'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

Button.propTypes = {
  addTripData: PropTypes.func,
}

export default function CreateTrip({ addTripData }) {
  const [disabled, setDisabled] = useState(true)
  const history = useHistory()
  const uniqueId = uuidv4()

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ButtonCancel />
      <h1>Erstelle einen neuen Trip!</h1>
      <label>
        <strong>Wohin</strong> möchtest Du reisen?
      </label>
      <InputText
        type="text"
        name="title"
        placeholder="Titel des Trips"
        onChange={handleChange}
        isRequired={true}
        isFocus={true}
      ></InputText>

      <label>
        <strong>Wann</strong> möchtest Du reisen?
      </label>
      <InputText
        type="text"
        name="date"
        placeholder="TT.MM. - TT.MM.JJ"
        onChange={handleChange}
        isRequired={false}
        isFocus={false}
      ></InputText>

      <Button label="Trip speichern" isDisabled={disabled} />
    </FormStyled>
  )

  function handleSubmit(event) {
    const form = event.target
    const title = form.title
    const date = form.date
    event.preventDefault()
    addTripData({
      title: title.value,
      date: date.value,
      id: uniqueId,
    })
    history.push('/')
  }

  function handleChange(event) {
    event.target.value === '' ? setDisabled(true) : setDisabled(false)
  }
}

const FormStyled = styled.form`
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
  display: grid;
  max-width: 742px;

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
