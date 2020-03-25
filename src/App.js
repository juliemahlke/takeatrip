import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import CreateTrip from './components/pages/CreateTrip'
import TripList from './components/pages/TripList'
import TripsData from './data/tripsdata.json'
import Header from './common/Header'
import Trip from './components/pages/Trip'
import Navigation from './common/Navigation'
import { loadFromLocal, saveToLocal } from './common/utils'
import NoteEditor from './components/trip/NoteEditor'

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
            <Route exact path="/trip/:id">
              <Trip trips={trips} deleteTrip={deleteTrip} setTrips={setTrips} />
            </Route>
            <Route path="/trip/:id/create-note">
              <NoteEditor setTrips={setTrips} trips={trips} />
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

  function deleteTrip(trip) {
    const index = trips.indexOf(trip)
    const newTrips = [...trips.slice(0, index), ...trips.slice(index + 1)]
    setTrips(newTrips)
    saveToLocal(newTrips)
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
`
