import './App.css';
import HomeScreen from './HomeScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in
        console.log(userAuth)

      } else {
        //Logged out
      }
    })
     return unsubscribe;
  }, [])

  return (
    <div className="App">
  <Router>
    {!user ? (
      <LoginScreen />
    ) : (
        <Switch>
          
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
