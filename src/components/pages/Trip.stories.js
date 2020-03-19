import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Trip from './Trip'

export default {
  title: 'Trips/Trip',
  component: Trip,
  decorators: [
    withKnobs,
    renderCard => <div style={{ padding: 20, width: 400 }}>{renderCard()}</div>,
  ],
}

export const TripDetail = () => (
  <Trip trips={[{ title: 'Osterurlaub Kanaren', date: '12.05. - 20.05.20' }]} />
)
