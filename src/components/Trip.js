import React from 'react'
import styled from 'styled-components'
import defaultImg from './images/default-image.jpg'

export default function Trip() {
  return (
    <>
      <TripStyled>
        <img src={defaultImg} width="200"></img>
        <div className="wrapper">
          <h2>Barcelona</h2>
          <span className="country">Spanien</span>
          <span className="date">12.05. - 20.05.20</span>
        </div>
      </TripStyled>
    </>
  )
}

const TripStyled = styled.section`
  max-height: 115px;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  margin-bottom: 15px;

  .wrapper {
    padding: 10px;
    display: grid;
    gap: 10px;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: normal;
    margin: 0;
    color: #505050;
  }
  img {
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    width: 30%;
  }

  .country {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.29;
    color: #747474;
  }

  .date {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.29;
    color: #747474;
  }
`
