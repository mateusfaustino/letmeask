import { createContext, useState, useEffect } from 'react'
import {Home} from './pages/home'
import {NewRoom} from './pages/newRoom'
import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route} from 'react-router-dom'
import { auth, firebase, database } from './services/firebase'
import {AuthContextProvider} from './contexts/AuthContext'

function App() {
  

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AuthContextProvider>
        <Route path='/' exact component={Home}/>
        <Route path='/rooms/new' component={NewRoom}/>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
