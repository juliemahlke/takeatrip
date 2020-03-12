import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import CreateTrip from './components/pages/CreateTrip'
import TripList from './components/pages/TripList'
import TripsData from './data/tripsdata.json'
import Icons from './common/Icons'
// import { tripsRef } from './firebase'
import Header from './common/Header'
import Trip from './components/pages/Trip'
import Navigation from './common/Navigation'

function App() {
  const tripsData = TripsData ? TripsData : []
  const [trips, setTrips] = useState(tripsData)

  return (
    <Router>
      <AppStyled>
        <Header />
        <MainStyled>
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
        </MainStyled>
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
  display: grid;
  gap: 2px;
  grid-template-rows: 60px auto;
  height: 100vh;
`

const MainStyled = styled.main`
  overflow-y: scroll;
  max-width: 568px;
  position: relative;
`
