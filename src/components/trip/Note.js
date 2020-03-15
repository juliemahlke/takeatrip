import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components/macro'

export default function Note({ title, content }) {
  const [fulltextVisible, setFulltextVisible] = useState(false)

  return (
    <NoteStyled onClick={showFulltext}>
      <EntryType>
        <FontAwesomeIcon className="icon" icon={['far', 'comment-dots']} />{' '}
        Notiz
      </EntryType>

      <h2>{title}</h2>
      {content && (
        <p className={fulltextVisible ? 'fulltext' : ''}>{content}</p>
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
  padding: 25px 0;
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
    font-size: 16px;
    font-weight: bold;
    color: #505050;
    margin-bottom: 5px;
  }

  p {
    line-height: 1.38;
    margin-bottom: 0;
    margin-top: 0;
    height: 65px;
    overflow: hidden;

    &.fulltext {
      height: auto;
    }
  }
`

const EntryType = styled.div`
  font-weight: 300;
  color: #5d7ca6;
`
