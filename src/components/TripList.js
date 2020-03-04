import React from 'react'
import TripListItem from './TripListItem'

export default function TripList({ trips }) {
  return (
    <>
      <h1>My Trips</h1>
      {trips.map(trip => (
        <TripListItem trip={trip} key={Math.random(trip)} />
      ))}
    </>
  )
}
