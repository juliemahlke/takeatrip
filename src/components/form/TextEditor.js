import { Editor } from '@tinymce/tinymce-react'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

TextEditor.propTypes = {
  handleEditorChange: PropTypes.func,
  editorContent: PropTypes.string,
}

export default function TextEditor({ handleEditorChange, editorContent }) {
  return (
    <EditorStyled>
      <Editor
        apiKey="89f8yntgojuxvga9sjy857nlku4ued8avgqfj03g0nlra5x2"
        textareaName="content"
        onEditorChange={handleEditorChange}
        value={editorContent}
        init={{
          hidden_input: false,
          selector: 'textarea',
          forced_root_block: '',
          height: '360',
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount save',
          ],
          toolbar: 'bold italic | bullist numlist | copy paste',
          paste_as_text: true,
          statusbar: false,
          mobile: {
            menubar: true,
            theme: 'mobile',
          },
        }}
      />
    </EditorStyled>
  )
}

const EditorStyled = styled.div`
  .tox-tinymce {
    border: 0;
  }
`
