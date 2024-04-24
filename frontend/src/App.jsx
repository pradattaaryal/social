import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sign from './pages/Auth'
import Login from './pages/Login'
import Feed from './components/Feed/Feed'
import Create from './components/Create/Create'
 import Logout from './pages/Logout'
import Error from './pages/Error'
import Profilepage from './pages/Profilepage'
import Saved from './pages/Saved'
 function App() {
 
  return (
  <>
      
   <Routes>
      <Route path='/profile/:friendId'  element={<Profilepage></Profilepage>}/>
      <Route path='/signin'  element={<Sign></Sign>}/>
      <Route path='/'  element={ <Login></Login>}/>
      <Route path='/feed'  element={ <Feed></Feed> }/>
      <Route path='/create'  element={ <Create></Create> }/>
      <Route path='/home'  element={<Home></Home>}/>
      <Route path='/logout'  element={ <Logout></Logout>}/>
      <Route path='/saved'  element={ <Saved></Saved>}/>
      <Route path='/*'  element={<Error></Error>}/>
   </Routes>
    
  </>
  )
}

export default App
