import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ButtonPrimary from '../form/Button'
import InputText from '../form/InputText'
import TextEditor from '../form/TextEditor'
import styled from 'styled-components/macro'

CreateNote.propTypes = {
  setTrips: PropTypes.func,
  trips: PropTypes.array,
}

export default function CreateNote({ setTrips, trips }) {
  const uniqueId = uuidv4()
  const [editorContent, setEditorContent] = useState('')
  const params = useParams()
  const trip = trips.find(trip => trip.id === params.id)
  const notes = trip.notes || []
  const history = useHistory()

  return (
    <WrapperStyled>
      <h1>Neue Notiz</h1>
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="title"
          placeholder="Titel eingeben ..."
          isRequired={true}
        ></InputText>
        <TextEditor
          value={editorContent}
          handleEditorChange={handleEditorChange}
        />
        <div className="center">
          <ButtonPrimary
            label={'Notiz speichern'}
            content="Notiz speichern"
          ></ButtonPrimary>
        </div>
      </Form>
    </WrapperStyled>
  )

  function handleEditorChange(editorContent) {
    setEditorContent(editorContent)
  }

  function handleSubmit(event) {
    const form = event.target
    const title = event.target.title
    event.preventDefault()
    addNote({
      title: title.value,
      content: editorContent,
      id: uniqueId,
    })
    form.reset()
    history.push(`/trip/${trip.id}`)
  }

  function addNote(note) {
    const newNotes = [note, ...notes]
    trip.notes = newNotes
    setTrips([...trips])
  }
}

const WrapperStyled = styled.div`
  position: relative;

  h1 {
    font-size: 18px;
    font-family: 'IBM Plex Sans';
    font-weight: 300;
  }
`

const Form = styled.form`
  input {
    border: 0;
    width: 100%;
    border-bottom: 1px solid #cecece;
    border-radius: 0;
    margin-bottom: 0;
    font-weight: 600;
  }

  button {
    bottom: 20px;
    margin: 0 auto;
  }
`
