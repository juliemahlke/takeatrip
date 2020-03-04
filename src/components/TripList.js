import React from 'react'
import TripListItem from './TripListItem'

export default function TripList({ trips }) {
  return (
    <>
      <h1>My Trips</h1>
      {trips.map(trip => (
        <TripListItem
          title={trip.title}
          date={trip.date}
          key={Math.random(trip)}
        />
      ))}
    </>
  )
}
