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
    display:flex;
    justify-content: center;
    padding: 0; 
    margin:0
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

  a {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.44;
    color: #5d7ca6;

    &:hover{
      text-decoration:underline;
    }
  }

  .icon {
    font-size: 18px;
    font-weight: 300;
    margin-right: 10px;
  }
`
