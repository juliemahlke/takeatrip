import React from 'react'
import Trip from './components/Trip'

function App() {
  const trips = [
    {
      title: 'Barcelona',
      date: '12.05. - 20.05.20',
    },
    {
      title: 'Berlin',
      date: '12.10. - 14.10.20',
    },
    {
      title: 'Basel',
      date: '12.05. - 20.05.20',
    },
  ]

  return (
    <div className="App">
      <h1>My Trips</h1>

      {trips.map(trip => (
        <Trip title={trip.title} date={trip.date} />
      ))}
    </div>
  )
}

export default App
