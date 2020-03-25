import { Editor } from '@tinymce/tinymce-react'
import PropTypes from 'prop-types'
import React from 'react'

TextEditor.propTypes = {
  handleEditorChange: PropTypes.func,
  editorContent: PropTypes.string,
}

export default function TextEditor({ handleEditorChange, editorContent }) {
  return (
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
  )
}
