import React from 'react'
import TripListItem from '../trip/TripListItem'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Trip from '../pages/Trip'

TripList.propTypes = {
  trips: PropTypes.array,
}

export default function TripList({ trips }) {
  return (
    <>
      <h1>My Trips</h1>
      {trips.map(trip => (
        <Link to={`/trip/${trip.id}`} key={trip.id}>
          <TripListItem trip={trip} />
        </Link>
      ))}
    </>
  )
}
