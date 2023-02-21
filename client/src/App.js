import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import { Chart } from './pages/Home';

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log("isLogin", isLoggedIn)

  return (
    <BrowserRouter>
      <Routes>
         {/* <Route exact path="/" element={
          isLoggedIn 
          ? <Profile/> 
          : <Navigate to='/signin'/>
        } />
        <Route path="signin" element={
          !isLoggedIn 
          ? <SignIn/> 
          : <Navigate to='/'/>
        } />  */}
        <Route path='/' element={<Profile/>}/> 
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 