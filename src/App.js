import styled, {createGlobalStyle } from 'styled-components';
import Atom from './Components/atoms';
import atom from './Components/atoms';
import background,{hover} from './Components/atoms/backgrounds';
import Grid from './Components/atoms/grid';
import Spacing from './Components/atoms/spacing';
import Button, {OutlinedButton, TextButton} from './Components/molecules/buttons';
import Header from './Components/molecules/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const spacing = new Spacing(7,'16px','10vw')
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${atom.scroll}
  ${atom.animation}
  body{
    background: ${atom.background.main};
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  `
  const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top: 40px;
  `
  const ButtonGroup = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    button{
      margin-bottom:8px;
    }
  `
  const Title = styled.h3`
  ${Atom.typography.header1}
`
const BoxWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-shadow:${atom.shadow.shadow_1dp};
  width:100%;
  max-width:${spacing.container};
  background:${atom.background.surface};
  `
  const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:16px;
  margin:8px;
  max-width:${spacing.container};
  box-shadow:${atom.shadow.shadow_3dp};
  
  ${atom.breakpoint.md}{
    max-width:calc(5*(${spacing.cgs}) - ${spacing.gap});
  }
  &.colors{
    flex-direction:column;
    width:100%;
    background:${(props)=>props.Value};
  }
  &.backgrounds{
    width:100%;
    ${(props)=>props.Value}
  }
  &.typografies{
    box-shadow:none;
    ${(props)=>props.Value}
  }
  &.animations{
    &::after{
      width:32px;
      height:32px;
      ${atom.background.primary_dark}
      content:" ";
      ${(props)=>props.Value}
    }
  }
  &.shadows{  
   box-shadow: ${(props)=>props.Value};
  }
`
function App() {
  const Values = (props) => {
    const keys = Object.keys(props.Component);
    return(
      <BoxWrapper>  
        <Title>{props.className}:</Title>
        {keys.map((key,index) =>
          <Box className={props.className} key={index} Value={props.Component[key]} >{key}</Box>
        )}
      </BoxWrapper>
    )
  } 
   
  return (
    <Router>

      <GlobalStyle/>
    
      <Header position='sticky' color='primary'></Header>
    <Container>
      {
      //<Grid Gap={spacing.gap} Margin={spacing.margin} Columns={spacing
      //.columns}/>
      }
      <Values className="colors" Component={Atom.color} />
      
      <Values className="backgrounds" Component={Atom.background} />
      
      <Values className="typografies" Component={Atom.typography} />
      
      <Values className="animations" Component={Atom.animation} />
      
      <Values className="shadows" Component={Atom.shadow} />
        <ButtonGroup>

          <Title>buttons</Title>
          <Button color='primary'>contained primary</Button>
          <Button color='secondary'>contained secondary</Button>
          <OutlinedButton color='primary' > outlined primary</OutlinedButton>
          <OutlinedButton color='secondary' > outlined secondary</OutlinedButton>
          <TextButton color='primary'>text primary</TextButton>
          <TextButton color='secondary' >text secondary</TextButton>
        </ButtonGroup>
  </Container>
  </Router>
  );
}

export default App;
