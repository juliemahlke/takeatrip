import React from 'react'
import Note from '../trip/Note'
import { v4 as uuidv4 } from 'uuid'

export default function NoteList({ notes }) {
  return (
    <>
      {notes.map(note => (
        <Note title={note.title} content={note.content} key={uuidv4()} />
      ))}
    </>
  )
}
