import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import LoginSignUp from "./pages/LogInSignUp/LoginSignUp";
import { createContext, useReducer } from "react";

export const url = 'http://127.0.0.1:8000'

function App() {

  const [ user, setUser ] = useReducer(userReducer, initialUser)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <button onClick={() => console.log(user)}>click</button>
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