import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Footer from './common/Footer'
import Header from './common/Header'
import { loadFromLocal, saveToLocal } from './common/utils'
import CreateNote from './components/pages/CreateNote'
import CreateTrip from './components/pages/CreateTrip'
import Trip from './components/pages/Trip'
import HomePage from './components/pages/HomePage'
import TripsData from './data/tripsdata.json'
import BookmarkPage from './components/pages/BookmarkPage'

function App() {
  const tripsData = TripsData || []
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
              <HomePage trips={trips} onBookmarkClick={handleBookmarkClick} />
            </Route>
            <Route path="/bookmarks">
              <BookmarkPage
                trips={trips}
                onBookmarkClick={handleBookmarkClick}
              />
            </Route>
            <Route path="/create">
              <CreateTrip addTripData={addTrip} />
            </Route>
            <Route exact path="/trip/:id">
              <Trip trips={trips} deleteTrip={deleteTrip} setTrips={setTrips} />
            </Route>
            <Route path="/trip/:id/create-note">
              <CreateNote setTrips={setTrips} trips={trips} />
            </Route>
          </Switch>
        </MainStyled>
        <Footer />
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

  function handleBookmarkClick(trip) {
    const index = trips.indexOf(trip)
    const updatedTrip = {
      ...trips[index],
      isBookmarked: !trips[index].isBookmarked,
    }
    setTrips([...trips.slice(0, index), updatedTrip, ...trips.slice(index + 1)])
  }
}

export default App

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: 100vh;
`

const MainStyled = styled.main`
  overflow-y: scroll;
`
