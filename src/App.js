import './App.css';
import HomeScreen from './HomeScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Router>
        <Switch>
          
          <Route exact path="/">
          <HomeScreen />
          </Route>

        </Switch>
    </Router>

    </div>
  );
}

export default App;
