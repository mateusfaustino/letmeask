import { createContext, useState, useEffect } from 'react'
import {Home} from './pages/home'
import {NewRoom} from './pages/newRoom'
import {Room} from './pages/room'
import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import { auth, firebase, database } from './services/firebase'
import {AuthContextProvider} from './contexts/AuthContext'

function App() {
  

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/rooms/new' exact component={NewRoom}/>
          <Route path='/rooms/:id' component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
