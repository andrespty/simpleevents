import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Events from "./pages/Events/Events";
import LoginSignUp from "./pages/LogInSignUp/LoginSignUp";
import { createContext, useReducer } from "react";
import PageTemplate from "./utils/PageTemplates";
import Dashboard from "./pages/Dashboard/Dashboard";

export const url = 'http://127.0.0.1:8000'

function App() {

  const [ user, setUser ] = useReducer(userReducer, initialUser)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
        
          <Route path='/login'>
            <LoginSignUp isLogin={true}/>
          </Route>

          <Route path='/signup'>
            <LoginSignUp isLogin={false}/>
          </Route>

          <Route path='/events'>
            <PageTemplate>
              <Events />
            </PageTemplate>
          </Route>

          <Route path='/dashboard'>
            <PageTemplate>
              <Dashboard />
            </PageTemplate>
          </Route>

          <Route path='/'>
            <PageTemplate>
              <Home/>
            </PageTemplate>
          </Route>

        </Switch>
      </Router>
      <button onClick={() => console.log(user)}>click</button>
    </UserContext.Provider>
  );
}

export default App;

const initialUser = {
  id:0,
  first_name: '',
  last_name: '',
  email: ''
}

const userReducer = (state, action) => {
  switch(action.type){

    case 'loginSignup':
      return {
        ...state,
        id: action.id,
        first_name: action.first_name,
        last_name: action.last_name,
        email: action.email
      }
    case 'update':
      return {
        ...state,
        [action.attribute]: action.value
      }

    default:
      return initialUser
  }
}

export const UserContext = createContext()