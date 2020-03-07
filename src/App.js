import React, { useState } from 'react'
import TripList from './components/TripList'
import styled from 'styled-components/macro'
import CreateTrip from './components/CreateTrip'
import TripsData from './data/tripsdata.json'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Icons from './common/Icons'
import ButtonAdd from './components/ButtonAdd'

function App() {
  const [trips, setTrips] = useState(TripsData)

  return (
    <Router>
      <ButtonAdd />

      <AppStyled>
        <Switch>
          <Route exact path="/">
            <TripList trips={trips} />
          </Route>
          <Route path="/create">
            <CreateTrip addTripData={createTrip()} />
          </Route>
        </Switch>
      </AppStyled>
    </Router>
  )

  function createTrip() {
    return trip => setTrips([trip, ...trips])
  }
}

export default App

const AppStyled = styled.div`
  max-width: 768px;
  position: relative;
`
