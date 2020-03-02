import React from 'react'
import Trip from './components/Trip'
import * as Trips from './data/trips.json'

function App() {
  const tripData = Trips.trips

  return (
    <div className="App">
      <h1>My Trips</h1>

      {tripData.map(trip => (
        <Trip title={trip.title} date={trip.date} />
      ))}
    </div>
  )
}

export default App
