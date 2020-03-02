import React from 'react'
import styled from 'styled-components/macro'
import defaultImg from '../images/default-image.jpg'

export default function TripListItem({ title, date }) {
  return (
    <>
      <TripListItemStyled>
        <img src={defaultImg} width="200" alt=""></img>
        <div className="wrapper">
          <h2>{title}</h2>
          <span>{date}</span>
        </div>
      </TripListItemStyled>
    </>
  )
}

const TripListItemStyled = styled.section`
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.29;
  color: #747474;
  height: 100px;
  overflow: hidden;

  .wrapper {
    padding: 10px;
    display: grid;
    gap: 10px;
    width: 70%;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: normal;
    margin: 0;
    color: #505050;
    max-height: 45px;
    overflow: hidden;
  }

  span {
    max-height: 30px;
  }

  img {
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    width: 30%;
  }
`
