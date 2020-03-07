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
    line-height: 1.14;
    letter-spacing: 0.56px;
    text-align: center;
    color: #505050;
    margin-bottom:40px;
  }

  strong {
    font-weight:700;
  }
`
