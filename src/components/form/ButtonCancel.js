import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'

export default function ButtonCancel() {
  return (
    <LinkStyled to="/">
      <FontAwesomeIcon icon={faTimesCircle} />
    </LinkStyled>
  )
}

const LinkStyled = styled(Link)`
  color: #b1b1b1;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
`
