import React from 'react'
import TripListItem from './TripListItem'

export default function TripList({ trips }) {
  console.log(trips)
  return (
    <>
      <h1>My Trips</h1>
      {trips.map(trip => (
        <TripListItem title={trip.title} date={trip.date} />
      ))}
    </>
  )
}
