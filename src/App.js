import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components/macro'
import ButtonAdd from './components/form/ButtonAdd'
import CreateTrip from './components/pages/CreateTrip'
import TripList from './components/pages/TripList'
import TripsData from './data/tripsdata.json'
import Icons from './common/Icons'
import { tripsRef } from './firebase'
import Header from './common/Header'

function App() {
  const tripsData = TripsData ? TripsData : []
  const [trips, setTrips] = useState(tripsData)
  const [toggle, setToggle] = useState(true)

  return (
    <Router>
      <NavLink onClick={() => setToggle(!toggle)} to="/create">
        <ButtonAdd />
      </NavLink>

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
          </Switch>
        </MainStyled>
        {/* <Navigaton /> */}
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
`
