import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function Bookmark({ onBookmarkClick, trip, bookmarkStatus }) {
  return (
    <StyledBookmark onClick={handleBookmarkClick} active={bookmarkStatus}>
      <BookmarkIcon className="bookmark" icon={faBookmark} />
    </StyledBookmark>
  )

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick(trip)
  }
}

const StyledBookmark = styled.button`
  position: absolute;
  right: 20px;
  top: -8px;
  font-size: 22px;
  background: transparent;
  border: 0;
  margin: 0;
  z-index: 100;
  color: ${props => (props.active ? 'hotpink' : '#e5e5e5')};
`

const BookmarkIcon = styled(FontAwesomeIcon)``
