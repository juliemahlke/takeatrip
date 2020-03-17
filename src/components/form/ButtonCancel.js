import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export default function ButtonCancel() {
  return (
    <LinkStyled to="/">
      <FontAwesomeIcon icon={['far', 'times-circle']} />
    </LinkStyled>
  )
}

const LinkStyled = styled(Link)`
  color: #b1b1b1;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
`
