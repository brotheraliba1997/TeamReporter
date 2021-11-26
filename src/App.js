import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';
import AuthContext from './context/AuthContext';
import AuthHandler from './authHandler/AuthHandler';
import Routes from './Routes/Routes';
function App() {
   const [isAuth, setAuth] = useState(false);

   const onLogin = () =>{
    setAuth(true);
   }
   const onLogOut = () =>{
    setAuth(false);
   }
  return (
    <div>
      <Routes />
      {/* <AuthContext.Provider value={{
        isLoggedIn : isAuth
      }}>
        <AuthHandler onLogin={onLogin} onLogOut={onLogOut}/>
      </AuthContext.Provider> */}
    </div>
  );
}

export default App;
