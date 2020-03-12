import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import TripListItem from '../trip/TripListItem'

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
