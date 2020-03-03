import React, { useState } from 'react'
import TripList from './components/TripList'
import styled from 'styled-components'
import CreateTrip from './components/CreateTrip'
import TripsData from './data/tripsdata.json'

function App() {
  const [trips, setTrips] = useState(TripsData)

  return (
    <AppStyled>
      <CreateTrip addTripData={createTrip()} />
      <TripList trips={trips} />
    </AppStyled>
  )

  function createTrip() {
    return trip => setTrips([trip, ...trips])
  }
}

export default App

const AppStyled = styled.div`
  max-width: 768px;
`
