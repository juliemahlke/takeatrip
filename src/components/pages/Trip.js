import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import defaultImg from '../../images/default-image.jpg'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoteList from '../trip/NoteList'
import { useHistory } from 'react-router-dom'

Trip.propTypes = {
  trips: PropTypes.array,
  deleteTrip: PropTypes.func,
}

export default function Trip({ trips, deleteTrip, notes }) {
  const params = useParams()
  const history = useHistory()
  const trip = trips.find(trip => trip.id === params.id)

  useEffect(() => {
    document.title = 'Trip | ' + trip.title
  })

  return (
    <TripStyled>
      <img src={defaultImg} width="200" alt=""></img>
      <WrapperStyled>
        {trip.date && (
          <Date>
            <FontAwesomeIcon className="icon" icon={['far', 'calendar-alt']} />
            {trip.date}
          </Date>
        )}
        <h1>{trip.title}</h1>
        <Location>USA</Location>

        <Link to={`/trip/${trip.id}/create-note`}>
          <FontAwesomeIcon className="icon" icon={['fas', 'plus-circle']} />
          Notiz hinzufügen
        </Link>

        <NoteList notes={notes} />
        <div className="center">
          <ButtonStyled onClick={handleDelete}>
            <FontAwesomeIcon className="icon" icon={['far', 'trash-alt']} />
          </ButtonStyled>
        </div>
      </WrapperStyled>
    </TripStyled>
  )

  function handleDelete() {
    deleteTrip(trip)
    history.push('/')
  }
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
    height: 150px;
    object-position: 50% 70%;
  }

  .icon {
    font-size: 16px;
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
  align-items: center;
`

const Location = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.28;
  color: #747474;
  margin-bottom: 20px;
`

const ButtonStyled = styled.button`
  margin: 40px 0;
  border: 0;
  background: transparent;

  .icon {
    font-size: 20px;
    color: #747474;
  }
`
