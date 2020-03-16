import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Note from './Note'

export default {
  title: 'Notes/Note',
  component: Note,
  decorators: [
    withKnobs,
    renderCard => (
      <div style={{ padding: 20, width: 400, background: '#fff' }}>
        {renderCard()}
      </div>
    ),
  ],
}

export const DefaultNote = () => (
  <Note
    title={text('title', 'Sehenswürdigkeiten in Florenz')}
    content={text(
      'content',
      'Kathedrale Santa Maria del Fiore, Uffizien, Ponte Vecchio, Palazzo Vecchio, Piazzale Michelangelo, Piazza della Signoria, Palazzo Pitti, Mercato Centrale, Palazzo Strozzi, Fiesole'
    )}
  />
)
