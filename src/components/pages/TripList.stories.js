import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import TripList from './TripList'

export default {
  title: 'TripList',
  component: TripList,
  decorators: [
    withKnobs,
    renderCard => <div style={{ padding: 20, width: 400 }}>{renderCard()}</div>,
  ],
}

export const DefaultList = () => (
  <TripList
    trips={[
      { title: 'Osterurlaub Kanaren', date: '12.05. - 20.05.20' },
      { title: 'Griechenland - Kreta', date: '23.11. - 28.11.19' },
      { title: 'Gran Canaria, Kanaren/Spanien', date: '12.05. - 20.05.20' },
      { title: 'Amsterdam Wochenendtrip', date: 'Herbst 2019' },
      { title: 'Basel', date: 'März 2019 - Fasnacht' },
      { title: 'Thailand - Koh Samui', date: 'Juli / 2017' },
    ]}
  />
)
