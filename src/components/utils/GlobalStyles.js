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

  .App {
    max-width: 768px;
  }

  h1 {
    font-family: 'Fredoka One';
  }
`
