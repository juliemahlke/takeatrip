import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import InputText from '../form/InputText'
import { useHistory } from 'react-router-dom'

export default function NoteEditor({ addNoteData }) {
  const content = useState()
  const history = useHistory()

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="title"
          placeholder="Titel des Trips"
        ></InputText>
        <Editor
          apiKey="89f8yntgojuxvga9sjy857nlku4ued8avgqfj03g0nlra5x2"
          textareaName="content"
          value={content}
          init={{
            hidden_input: false,
            selector: 'textarea',
            forced_root_block: '',
            height: '75vh',
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount save',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | save',
          }}
        />
        <button>save</button>
      </form>
    </>
  )

  function handleSubmit(event) {
    const content = event.target.content
    const title = event.target.title
    event.preventDefault()
    addNoteData({
      title: title.value,
      content: content.value,
    })
    history.push('/trip')
  }
}
