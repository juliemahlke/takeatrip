import React from 'react'
import TripList from '../trip/TripList'
import styled from 'styled-components/macro'

export default function BookmarkPage({ trips, onBookmarkClick }) {
  return (
    <HomePageStyled>
      {trips.some(trip => trip.isBookmarked) ? (
        <TripList
          trips={trips.filter(trip => trip.isBookmarked)}
          onBookmarkClick={onBookmarkClick}
        />
      ) : (
        <small>Du hast aktuell keine Bookmarks</small>
      )}
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
