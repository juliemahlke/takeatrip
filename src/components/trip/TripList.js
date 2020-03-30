import PropTypes from 'prop-types'
import React from 'react'
import TripListItem from './TripListItem'

TripList.propTypes = {
  trips: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
}

export default function TripList({ trips, onBookmarkClick }) {
  return (
    <>
      {trips.map(trip => (
        <TripListItem
          trip={trip}
          onBookmarkClick={() => onBookmarkClick(trip)}
          key={trip.id}
        />
      ))}
    </>
  )
}
