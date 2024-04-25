import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sign from './pages/Auth';
import Login from './pages/Login';
import Feed from './components/Feed/Feed';
import Create from './components/Create/Create';
import Logout from './pages/Logout';
import Error from './pages/Error';
import Profilepage from './pages/Profilepage';
import Saved from './pages/Saved';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/profile/:friendId' element={<Profilepage />} />
          <Route path='/' element={<Sign />} />
          <Route path='/xx' element={<Login />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/create' element={<Create />} />
          <Route path='/home' element={<Home />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
