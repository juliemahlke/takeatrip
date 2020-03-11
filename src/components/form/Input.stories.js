import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import InputText from './InputText'

export default {
  title: 'Form/InputText',
  component: InputText,
  decorators: [
    withKnobs,
    renderCard => <div style={{ padding: 20, width: 400 }}>{renderCard()}</div>,
  ],
}

export const inputDefault = () => <InputText />

export const inputPlaceholder = () => (
  <InputText placeholder={text('Placeholder', 'Any placeholder')} />
)
