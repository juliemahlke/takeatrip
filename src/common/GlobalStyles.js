import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    background: #F5F5F5;
    color: #333;
    padding: 25px;
    display:flex;
    justify-content: center;
  }

  h1 {
    font-family: 'Fredoka One';
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 0.56px;
    text-align: center;
    color: #505050;
    margin-bottom:40px;
  }

  strong {
    font-weight:700;
  }

  button {
    border-radius: 24px;
    font-family: 'Fredoka One';
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.4px;
    text-align: center;
    background-color: #f85a8e;
    color: #ffffff;
    border:0;
    padding: 10px 30px;
    display: inline-block;
    margin: 30px; 
  }
`
