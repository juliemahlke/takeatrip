import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import CreateTrip from './components/pages/CreateTrip'
import TripList from './components/pages/TripList'
import TripsData from './data/tripsdata.json'
import Icons from './common/Icons' // @ts-ignore
import Trip from './components/pages/Trip'
import Navigation from './common/Navigation'

function App() {
  const tripsData = TripsData ? TripsData : []
  const [trips, setTrips] = useState(tripsData)

  return (
    <Router>
      <AppStyled>
        <Switch>
          <Route exact path="/">
            <TripList trips={trips} />
          </Route>
          <Route path="/create">
            <CreateTrip addTripData={createTrip()} />
          </Route>
          <Route path="/trip/:id">
            <Trip trips={trips} />
          </Route>
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
  )

  function createTrip() {
    return trip => setTrips([trip, ...trips])
  }
}

export default App

const AppStyled = styled.div`
  max-width: 568px;
  position: relative;
`
