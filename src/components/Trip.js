import React from 'react'
import styled from 'styled-components'
import defaultImg from './images/default-image.jpg'

export default function Trip() {
  return (
    <>
      <Trip>
        <img src={defaultImg} width="200"></img>
        <div className="wrapper">
          <h2>Barcelona</h2>
          <span className="country">Spanien</span>
          <span className="date">12.05. - 20.05.20</span>
        </div>
      </Trip>
    </>
  )
}
