import React from 'react'
import TripListItem from './TripListItem'
import TripsData from '../data/tripsdata.json'

export default function TripList() {
  return (
    <>
      <h1>My Trips</h1>

      {TripsData.map(trip => (
        <TripListItem title={trip.title} date={trip.date} />
      ))}
    </>
  )
}
