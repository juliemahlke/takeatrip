import React, { useState } from 'react'

export default function CreateTrip({ addTripData }) {
  const [trip, setTrip] = useState({})

  return (
    <form onSubmit={handleSubmit}>
      <label>Wohin möchtest Du reisen? </label>
      <input
        name="title"
        placeholder="Titel des Trips"
        onChange={handleChange}
        value={trip.title}
      ></input>
      <input
        name="date"
        placeholder="Reisezeitraum"
        onChange={handleChange}
      ></input>
      <button>Trip speichern</button>
    </form>
  )

  function handleSubmit(event) {
    const form = event.target
    const title = form.title
    const date = form.date
    event.preventDefault()
    addTripData({ title: title.value, date: date.value })
    form.reset()
    setTrip({})
    form[0].focus()
  }

  function handleChange(event) {
    setTrip(event.target.value)
  }
}
