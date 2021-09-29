import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      
      <Header/>

      <Switch>
      
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
      
        <Route path='/events'>
          <Events/>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
