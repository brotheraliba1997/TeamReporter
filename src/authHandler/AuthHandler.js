import { useContext } from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import AuthContext from "../context/AuthContext";

const AuthHandler = ({onLogin, onLogOut}) =>{
    const authCtx = useContext(AuthContext);
    authCtx.isLoggedIn ? <Home/> : <Login/>

}
export default AuthHandler;