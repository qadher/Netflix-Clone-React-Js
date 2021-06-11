import './App.css';
import HomeScreen from './HomeScreen';
import ProfileScreen from './Screens/ProfileScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged
    (userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );

      } else {
        
        dispatch(logout());
      }
    });
     return unsubscribe;
  }, []);

  return (
    <div className="App">
  <Router>
    {!user ? (
      <LoginScreen />
    ) : (
        <Switch>
          <Route path='/profile'>
              <ProfileScreen />
          </Route>
          
          <Route exact path="/">
          <HomeScreen />
          </Route>

        </Switch>
         )}
    </Router>

    </div>
  );
}

export default App;
