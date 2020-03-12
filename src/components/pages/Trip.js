import React, { useEffect } from 'react'
import defaultImg from '../../images/default-image.jpg'
import { useParams } from 'react-router-dom'

export default function Trip({ trips }) {
  const params = useParams()
  const trip = trips.find(trip => trip.id === params.id)

  useEffect(() => {
    console.log(params)
    console.log(trips)
    console.log(trip)
  })

  return (
    <>
      <img src={defaultImg} width="200" alt=""></img>
      <h1>{trip.title}</h1>
      {trip.date}
    </>
  )
}
