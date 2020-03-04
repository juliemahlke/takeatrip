import React, { useState, useEffect } from 'react'
import TripList from './components/TripList'
import styled from 'styled-components/macro'
import CreateTrip from './components/CreateTrip'
import TripsData from './data/tripsdata.json'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function App() {
  const [trips, setTrips] = useState(TripsData)
  const [toggle, setToggle] = useState(true)

  useEffect(() => {}, [toggle])

  //console.log(trips)
  return (
    <Router>
      <ButtonStyled onClick={() => setToggle(!toggle)} to="/create">
        +
      </ButtonStyled>

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

const ButtonStyled = styled(NavLink)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-family: 'Fredoka One';
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.4px;
  text-align: center;
  background-color: #f85a8e;
  color: #ffffff;
  border: 0;
  padding: 10px;
  text-decoration: none;
`
