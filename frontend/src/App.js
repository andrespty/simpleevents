import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import LoginSignUp from "./pages/LogInSignUp/LoginSignUp";
import { createContext, useReducer } from "react";
import PageTemplate from "./utils/PageTemplates";
import Dashboard from "./pages/Dashboard/Dashboard";
import WhyUs from "./pages/Why_Us/WhyUs";

export const url = 'http://127.0.0.1:8000'

function App() {

  const [ user, setUser ] = useReducer(userReducer, initialUser)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
        
          <Route path='/login'>
            <PageTemplate>
              <LoginSignUp isLogin={true}/>
            </PageTemplate>
          </Route>

          <Route path='/signup'>
            <PageTemplate>
              <LoginSignUp isLogin={false}/>
            </PageTemplate>
          </Route>

          <Route path='/dashboard'>
            <PageTemplate>
              <Dashboard />
            </PageTemplate>
          </Route>

          <Route path='/whyus'>
            <PageTemplate>
              <WhyUs />
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