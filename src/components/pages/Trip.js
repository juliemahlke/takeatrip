import React, { useEffect } from 'react'
import defaultImg from '../../images/default-image.jpg'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Trip({ trips }) {
  const params = useParams()
  const trip = trips.find(trip => trip.id === params.id)

  return (
    <>
      <Link exact to="/">
        back
      </Link>

      <TripStyled>
        <img src={defaultImg} width="200" alt=""></img>
        <WrapperStyled>
          <Date>
            <FontAwesomeIcon className="icon" icon={['fal', 'calendar-alt']} />
            {trip.date}
          </Date>
          <h1>{trip.title}</h1>
          <Location>USA</Location>
          <a href="https://www.google.de">
            <FontAwesomeIcon className="icon" icon={['fal', 'plus-circle']} />
            Notiz hinzufügen
          </a>
        </WrapperStyled>
      </TripStyled>
    </>
  )
}

const TripStyled = styled.section`
  text-align: left;
  background: #fff;

  h1 {
    font-family: 'IBM Plex Sans';
    font-size: 26px;
    font-weight: bold;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #505050;
    margin-bottom: 5px;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 300px;
  }
`

const WrapperStyled = styled.div`
  padding: 25px;
`

const Date = styled.div`
  font-family: 'IBM Plex Sans';
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  color: #747474;
`

const Location = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.28;
  color: #747474;
  margin-bottom: 20px;
`
