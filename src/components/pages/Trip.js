import React from 'react'
import defaultImg from '../../images/default-image.jpg'

export default function Trip() {
  return (
    <>
      <Trip>
        <img src={defaultImg} width="200" alt=""></img>
        <h2>Title</h2>
        <span>Date</span>
      </Trip>
    </>
  )
}
