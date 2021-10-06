import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import LoginSignUp from "./pages/LogInSignUp/LoginSignUp";

export const url = 'http://127.0.0.1:8000'

function App() {
  return (
    <Router>
      <Switch>
      
        <Route path='/login'>
          <LoginSignUp isLogin={true}/>
        </Route>

        <Route path='/signup'>
          <LoginSignUp isLogin={false}/>
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
