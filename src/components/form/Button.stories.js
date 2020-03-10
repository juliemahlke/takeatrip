import React from 'react'
import { action } from '@storybook/addon-actions'
import ButtonPrimary from './Button'
import ButtonAdd from './ButtonAdd'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Form/Buttons',
  component: ButtonPrimary,
  decorators: [
    withKnobs,
    renderCard => <div style={{ padding: 20, width: 400 }}>{renderCard()}</div>,
  ],
}

export const buttonDefault = () => (
  <ButtonPrimary
    label={text('Label', 'Click')}
    onClick={action('send')}
    content="Some Text goes here"
    isDisabled={boolean('Disabled', false)}
  ></ButtonPrimary>
)

export const buttonDisabled = () => (
  <ButtonPrimary
    label={text('Label', 'Click')}
    onClick={action('send')}
    content="Some Text goes here"
    isDisabled={boolean('Disabled', true)}
  ></ButtonPrimary>
)

export const buttonIcon = () => <ButtonAdd onClick={action('send')}></ButtonAdd>
