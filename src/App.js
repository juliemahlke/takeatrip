import React from 'react'
import TripList from './components/TripList'
import styled from 'styled-components'

function App() {
  return (
    <AppStyled>
      <TripList />
    </AppStyled>
  )
}

export default App

const AppStyled = styled.div`
  max-width: 768px;
`
