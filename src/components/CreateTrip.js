import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export default function CreateTrip({ addTripData }) {
  const [trip, setTrip] = useState({})

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Link to="/">abbrechen</Link>
      <h1>Erstelle einen neuen Trip!</h1>
      <label>
        <WrapperStyled>
          <strong>Wohin</strong> möchtest Du reisen?
        </WrapperStyled>
        <input
          type="text"
          name="title"
          placeholder="Titel des Trips"
          onChange={handleChange}
          value={trip.title}
        ></input>
      </label>

      <label>
        <WrapperStyled>
          <strong>Wann</strong> möchtest du verreisen?
        </WrapperStyled>
        <input
          type="text"
          name="date"
          placeholder="Reisezeitraum"
          onChange={handleChange}
        ></input>
      </label>
      <button>Trip speichern</button>
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
    console.log(event.target.value)
  }
}

const FormStyled = styled.form`
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 40px;
  text-align: center;

  label {
    display: grid;
    gap: 8px;
    font-size: 18px;
    line-height: 1.28;
    letter-spacing: 0.36px;
    text-align: center;
    color: #505050;
    margin-bottom: 40px;
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

const WrapperStyled = styled.div`
  margin-bottom: 10px;
`
