import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  id: PropTypes.string,
}

export default function Note({ title, content }) {
  const [fulltextVisible, setFulltextVisible] = useState(false)

  return (
    <NoteStyled onClick={showFulltext}>
      <EntryType>
        <FontAwesomeIcon className="icon" icon={faCommentDots} />
        Notiz
      </EntryType>

      <h2>{title}</h2>
      {content && (
        <NoteContent className={fulltextVisible ? 'fulltext' : ''}>
          {ReactHtmlParser(content)}
        </NoteContent>
      )}
    </NoteStyled>
  )

  function showFulltext() {
    setFulltextVisible(!fulltextVisible)
  }
}

const NoteStyled = styled.section`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #505050;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 0;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  .icon {
    font-size: 18px;
    margin-right: 5px;
  }

  h2 {
    font-family: 'IBM Plex Sans';
    font-size: 20px;
    font-weight: bold;
    color: #505050;
    margin-bottom: 5px;
  }
`

const NoteContent = styled.div`
  line-height: 1.38;
  margin-bottom: 0;
  margin-top: 0;
  display: none;

  &.fulltext {
    display: block;
  }
`

const EntryType = styled.div`
  font-weight: 300;
  color: #5d7ca6;
`
