import React from 'react'
import styled from 'styled-components/macro'
import defaultImg from '../../images/default-image.jpg'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

TripListItem.propTypes = {
  trip: PropTypes.object,
  onBookmarkClick: PropTypes.func.isRequired,
}

export default function TripListItem({ trip, onBookmarkClick }) {
  return (
    <TripListItemStyled>
      <StyledBookmark
        onClick={handleBookmarkClick}
        active={trip.isBookmarked}
        aria-label={trip.isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      >
        <BookmarkIcon className="bookmark" icon={faBookmark} />
      </StyledBookmark>

      <img src={defaultImg} width="200" alt=""></img>
      <WrapperStyled>
        <h2>{trip.title}</h2>
        <div>
          <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
          <span>{trip.date}</span>
        </div>
      </WrapperStyled>
    </TripListItemStyled>
  )

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
  }
}

const TripListItemStyled = styled.section`
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.29;
  color: #747474;
  height: 100px;
  position: relative;

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: normal;
    margin: 0;
    color: #505050;
    max-height: 45px;
    overflow: hidden;
  }

  span {
    max-height: 30px;
  }

  .icon {
    color: #747474;
    font-size: 16px;
  }

  img {
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    width: 30%;
  }
`

const WrapperStyled = styled.div`
  padding: 10px;
  display: grid;
  gap: 10px;
  width: 70%;
`

const StyledBookmark = styled.button`
  position: absolute;
  right: 20px;
  top: -8px;
  font-size: 22px;
  background: transparent;
  border: 0;
  margin: 0;
  z-index: 100;
  color: ${props => (props.active ? '#F85A8E' : '#e5e5e5')};
`

const BookmarkIcon = styled(FontAwesomeIcon)``
