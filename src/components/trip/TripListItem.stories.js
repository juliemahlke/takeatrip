import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import TripListItem from './TripListItem'

export default {
  title: 'Trips/TripListItem',
  component: TripListItem,
  decorators: [
    withKnobs,
    renderCard => <div style={{ padding: 20, width: 400 }}>{renderCard()}</div>,
  ],
}

export const DefaultItem = () => (
  <TripListItem trip={{ title: 'Barcelona', date: '16.05. - 20.05.20' }} />
)

export const ItemWithoutDate = () => (
  <TripListItem trip={{ title: 'Barcelona', date: '' }} />
)

export const ItemWithLongTitle = () => (
  <TripListItem
    trip={{
      title:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
      date: '16.05. - 20.05.20',
    }}
  />
)
