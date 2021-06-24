import {Home} from './pages/home'
import {NewRoom} from './pages/newRoom'
import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Route path='/' exact component={Home}/>
      <Route path='/rooms/new' component={NewRoom}/>
    </BrowserRouter>
  );
}

export default App;
