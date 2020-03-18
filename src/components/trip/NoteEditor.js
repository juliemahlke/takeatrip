import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Editor } from '@tinymce/tinymce-react'
import ButtonPrimary from '../form/Button'
import { useHistory } from 'react-router-dom'

export default function NoteEditor({ addNoteData }) {
  // const editorRef = useRef()
  // const history = useHistory()
  const [content, setContent] = useState()

  return (
    <>
      <form onSubmit={handleSubmit}>
        <EditorStyled
          apiKey="89f8yntgojuxvga9sjy857nlku4ued8avgqfj03g0nlra5x2"
          // onEditorChange={handleChange}
          textareaName="content"
          init={{
            height: '75vh',
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount save',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help | save',
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  )

  // function handleChange(event) {
  //   console.log('Content was updated:', event)
  //   addNoteData({
  //     title: 'Barcelona',
  //     content: event,
  //   })
  // }

  function handleSubmit(event) {
    addNoteData({
      title: '',
      content: event.target.content.value,
    })
    console.log('content:', event.target.content.value)

    // history.push('/')
  }
}

const EditorStyled = styled(Editor)``
