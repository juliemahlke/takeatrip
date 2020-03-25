import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ButtonPrimary from '../form/Button'
import InputText from '../form/InputText'
import TextEditor from '../form/TextEditor'

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
    <form onSubmit={handleSubmit}>
      <InputText
        type="text"
        name="title"
        placeholder="Titel der Notiz"
        isRequired={true}
      ></InputText>
      <TextEditor
        value={editorContent}
        handleEditorChange={handleEditorChange}
      />
      <ButtonPrimary
        label={'Notiz speichern'}
        content="Notiz speichern"
      ></ButtonPrimary>
    </form>
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
