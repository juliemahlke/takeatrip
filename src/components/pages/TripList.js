import React from 'react'
import TripListItem from '../trip/TripListItem'
import PropTypes from 'prop-types'

TripList.propTypes = {
  trips: PropTypes.array,
}

export default function TripList({ trips }) {
  return (
    <>
      {trips.map(trip => (
        <TripListItem trip={trip} key={Math.random(trip)} />
      ))}
    </>
  )
}
