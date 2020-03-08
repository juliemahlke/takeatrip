import React from 'react'
import { action } from '@storybook/addon-actions'
import ButtonPrimary from './Button'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Buttons',
  component: ButtonPrimary,
  decorators: [withKnobs],
}

export const buttonPrimary = () => (
  <ButtonPrimary
    label={text('Label', 'Click')}
    onClick={action('send')}
    content="Some Text goes here"
    disabled={boolean('Disabled', false)}
  ></ButtonPrimary>
)

export const buttonDisabled = () => (
  <ButtonPrimary
    label={text('Label', 'Click')}
    onClick={action('send')}
    content="Some Text goes here"
    disabled={boolean('Disabled', true)}
  ></ButtonPrimary>
)
