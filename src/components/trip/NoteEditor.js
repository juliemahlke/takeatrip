import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import InputText from '../form/InputText'
// import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function NoteEditor({ addNote }) {
  const uniqueId = uuidv4()
  const [EditorContent, setEditorContent] = useState('hello')

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="title"
          placeholder="Titel des Trips"
          isRequired={true}
        ></InputText>
        <Editor
          apiKey="89f8yntgojuxvga9sjy857nlku4ued8avgqfj03g0nlra5x2"
          textareaName="content"
          onEditorChange={handleChange}
          value={EditorContent}
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
            toolbar: 'bold italic | bullist numlist link',
          }}
        />
        <button>save</button>
      </form>
    </>
  )

  function handleChange(event) {
    setEditorContent(event)
    console.log(EditorContent)
  }

  function handleSubmit(event) {
    const content = event.target.content
    const title = event.target.title
    event.preventDefault()
    addNote({
      title: title.value,
      content: content.value,
      id: uniqueId,
    })
  }
}
