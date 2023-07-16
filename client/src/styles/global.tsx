import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
  ...
  }

  *::before,
  *::after {
  ...
  }

  body {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 0 auto;
    max-width: 1200px;
    background: #F4F4F5;
  }
`