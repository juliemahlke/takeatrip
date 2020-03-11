import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import styled from 'styled-components/macro'
import ButtonAdd from './components/form/ButtonAdd'
import CreateTrip from './components/pages/CreateTrip'
import TripList from './components/pages/TripList'
import TripsData from './data/tripsdata.json'
import Icons from './common/Icons'
// import { tripsRef } from './firebase'
import Trip from './components/pages/Trip'

function App() {
  const tripsData = TripsData ? TripsData : []
  const [trips, setTrips] = useState(tripsData)
  const [toggle, setToggle] = useState(true)

  return (
    <Router>
      <NavLink onClick={() => setToggle(!toggle)} to="/create">
        <ButtonAdd />
      </NavLink>

      <Link to="/trip">Trip</Link>

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
