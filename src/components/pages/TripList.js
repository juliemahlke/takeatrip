import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import TripListItem from '../trip/TripListItem'
import styled from 'styled-components/macro'

TripList.propTypes = {
  trips: PropTypes.array,
}

export default function TripList({ trips }) {
  return (
    <TripListStyled>
      {trips.map(trip => (
        <Link to={`/trip/${trip.id}`} key={trip.id}>
          <TripListItem trip={trip} />
        </Link>
      ))}
    </TripListStyled>
  )
}

const TripListStyled = styled.section`
  a,
  a:hover {
    text-decoration: none;
  }
`
