import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent; /* For some Androids */
  }
`