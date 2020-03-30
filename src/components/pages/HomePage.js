import PropTypes from 'prop-types'
import React from 'react'
import TripList from '../trip/TripList'
import styled from 'styled-components/macro'

HomePage.propTypes = {
  trips: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
}

export default function HomePage({ trips, onBookmarkClick }) {
  return (
    <HomePageStyled>
      <TripList trips={trips} onBookmarkClick={onBookmarkClick} />
    </HomePageStyled>
  )
}

const HomePageStyled = styled.section`
  padding: 25px;
  background: #f5f5f5;
  height: 100vh;

  a,
  a:hover {
    text-decoration: none;
    position: relative;
    z-index: 0;
  }
`
