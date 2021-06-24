import { createContext, useState } from 'react'
import {Home} from './pages/home'
import {NewRoom} from './pages/newRoom'
import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route} from 'react-router-dom'
import { auth, firebase, database } from './services/firebase'
export const AuthContext = createContext({})
function App() {
  const [user, setUser]=useState()
  async function signinWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider) 
          
    if(res.user){
      const {displayName, photoURL, uid} = res.user
      if(!displayName|| !photoURL){
        throw new Error ('Missing informations from Google Account.')
      }
      setUser({
        id:uid,
        name:displayName,
        avatar:photoURL
      })
    }  
    
  }
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AuthContext.Provider value={{user,signinWithGoogle}}>
        <Route path='/' exact component={Home}/>
        <Route path='/rooms/new' component={NewRoom}/>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
