import { createGlobalStyle } from 'styled-components';
import {palette} from './colors';
import scroll from './scroll'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props)=>props.theme=='dark'? palette.background.dark:palette.background.main};
    color:${(props)=>props.theme=='dark'? palette.background.onDarkText:palette.background.onLightText};
    ${scroll}
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
`
const Global = (props) => 
  <GlobalStyle
    theme={props.theme}
  />
    
export default Global
