import Login from './Pages/login/login.js';
import Register from './Pages/Register/Register.js';
// import Home from './Pages/Home/home.js';
import Profile from './component/Profile/profile.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
          <Route exact path="/Login" element={<Login />}/>
           <Route path="/Register" element={<Register />} /> 
            <Route path="/Profile/:username" element={<Profile />}/> 
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
