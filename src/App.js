import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Trip from './components/Trip'
import GlobalStyles from './components/utils/GlobalStyles'

function App() {
  return (
    <div className="App">
      <h1>My Trips</h1>

      <Trip />
    </div>
  )
}

export default App
