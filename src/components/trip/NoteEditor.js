import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Editor } from '@tinymce/tinymce-react'
import ButtonPrimary from '../form/Button'

export default function NoteEditor() {
  return (
    <>
      <h1>Note Editor</h1>
      <EditorStyled
        apiKey="89f8yntgojuxvga9sjy857nlku4ued8avgqfj03g0nlra5x2"
        init={{ plugins: 'link table' }}
        textareaName="Create Note"
      />

      <ButtonPrimary label="Save"></ButtonPrimary>
    </>
  )
}

const EditorStyled = styled(Editor)`
  height: 100vh;
`
