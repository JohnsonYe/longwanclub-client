import React, {useState, useEffect} from 'react';
import Routes from './components/routes';
import './style/responsive.css';
import NavBar from './components/navbar';
import Cookies from './classes/cookies';
import Oauth from './classes/oauth';
import { Redirect } from 'react-router-dom';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    login_id: "",
    hasAccess: false,
    authenticated: false,
    access_token: ""
  });

  function authenticated(condition) {
    setLogin(condition);
  }

  function handleCurrentUser(user) {
    Cookies.set('refresh_token', user.refresh_token, 86400);
    setCurrentUser({
        name: user.name,
        login_id: user.login_id,
        hasAccess: true,
        authenticated: true,
        access_token: user.access_token
    });
  }
  
  useEffect(() => {
    async function checkAuth() {
        const isAuth = await checkCookies();
        setLoading(false);
    }
    checkAuth();
  }, []);
    
    

  async function checkCookies() {
    // case 1: contain refresh_token, page has access
    // case 2: no refresh_token
    try {
      if (Cookies.get("refresh_token")) {
        const oauth = new Oauth();
        const response = await oauth.renew(Cookies.get("refresh_token"));
        Cookies.set('refresh_token', response.refresh_token, 86400);
        setLogin(true);
        setCurrentUser({
          name: response.name,
          login_id: response.login_id,
          hasAccess: true,
          authenticated: true,
          access_token: response.access_token
        });
        return true;
      } else {
        return false;
      }
    } catch(err) {
      return false;
    }
  }

  if (isLoading) {
    return (<div>Is loading...</div>);
  }

  return (
    <div className="App">
      <Routes 
        handleAuthentication={authenticated} 
        handleCurrentUser={handleCurrentUser}
        isLogin={isLogin} 
        currentUser={currentUser}></Routes>
      <NavBar isLoggedIn={isLogin}></NavBar>
    </div>
  );
}

export default App;
