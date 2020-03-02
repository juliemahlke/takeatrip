import React from 'react'
import TripListItem from './TripListItem'
import * as Trips from '../data/trips.json'

export default function TripList() {
  const tripData = Trips.trips

  return (
    <>
      <h1>My Trips</h1>

      {tripData.map(trip => (
        <TripListItem title={trip.title} date={trip.date} />
      ))}
    </>
  )
}
