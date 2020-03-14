import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import CreateTrip from './components/pages/CreateTrip'
import TripList from './components/pages/TripList'
import TripsData from './data/tripsdata.json'
import Icons from './common/Icons'
import Header from './common/Header'
import Trip from './components/pages/Trip'
import Navigation from './common/Navigation'
import { loadFromLocal, saveToLocal } from './common/utils'

function App() {
  const tripsData = TripsData ? TripsData : []
  const [trips, setTrips] = useState(loadFromLocal('trips') || tripsData)

  useEffect(() => {
    saveToLocal('trips', trips)
  }, [trips])

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
              <CreateTrip addTripData={addTrip} />
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

  function addTrip(trip) {
    const newTrips = [trip, ...trips]
    setTrips(newTrips)
  }
}

export default App

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: 100vh;
  position: relative;
`

const MainStyled = styled.main`
  overflow-y: scroll;
  position: relative;
  padding: 25px;
`
