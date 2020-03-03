import React, { useState } from 'react'

export default function CreateTrip({ addTripData }) {
  const [trip, setTrip] = useState('')

  return (
    <form onSubmit={handleSubmit}>
      <label>Wohin möchtest Du reisen? </label>
      <input
        onChange={handleChange}
        name="title"
        placeholder="Titel des Trips"
      ></input>
      <button>Trip speichern</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    addTripData(trip)
    setTrip('')
  }

  function handleChange(event) {
    setTrip(event.target.value)
  }
}
