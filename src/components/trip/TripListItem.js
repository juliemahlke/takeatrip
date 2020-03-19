import React from 'react'
import styled from 'styled-components/macro'
import defaultImg from '../../images/default-image.jpg'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

TripListItem.propTypes = {
  trip: PropTypes.object,
}

export default function TripListItem({ trip }) {
  return (
    <>
      <TripListItemStyled>
        <img src={defaultImg} width="200" alt=""></img>
        <WrapperStyled>
          <h2>{trip.title}</h2>
          <div>
            <FontAwesomeIcon className="icon" icon={['far', 'calendar-alt']} />
            <span>{trip.date}</span>
          </div>
        </WrapperStyled>
      </TripListItemStyled>
    </>
  )
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
  overflow: hidden;

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
