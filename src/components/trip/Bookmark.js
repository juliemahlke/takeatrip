import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

Bookmark.propTypes = {
  trip: PropTypes.object.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
}

export default function Bookmark({ onBookmarkClick, trip }) {
  return (
    <StyledBookmark
      onClick={handleBookmarkClick}
      active={trip.isBookmarked}
      aria-label={trip.isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <BookmarkIcon className="bookmark" icon={faBookmark} />
    </StyledBookmark>
  )

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
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
