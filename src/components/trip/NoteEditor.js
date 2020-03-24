import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import InputText from '../form/InputText'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

export default function NoteEditor({ setTrips, trips }) {
  const uniqueId = uuidv4()
  const [editorContent, setEditorContent] = useState('')
  const params = useParams()
  const trip = trips.find(trip => trip.id === params.id)
  const notes = trip.notes || []

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="title"
          placeholder="Titel der Notiz"
          isRequired={true}
        ></InputText>
        <Editor
          apiKey="89f8yntgojuxvga9sjy857nlku4ued8avgqfj03g0nlra5x2"
          textareaName="content"
          onEditorChange={handleEditorChange}
          value={editorContent}
          init={{
            hidden_input: false,
            selector: 'textarea',
            forced_root_block: '',
            height: '',
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount save',
            ],
            toolbar: 'bold italic | bullist numlist link | paste',
            paste_as_text: true,
          }}
        />
        <button>save</button>
      </Form>
    </>
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
  }

  function addNote(note) {
    const newNotes = [note, ...notes]
    trip.notes = newNotes
    setTrips([...trips])
  }
}

const Form = styled.form`
  margin-bottom: 30px;
`
