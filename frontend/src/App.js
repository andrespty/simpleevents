import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import LoginSignUp from "./pages/LogInSignUp/LoginSignUp";
import { createContext } from "react";
import PageTemplate from "./utils/PageTemplates";
import Dashboard from "./pages/Dashboard/Dashboard";
import WhyUs from "./pages/Why_Us/WhyUs";
import useUser from "./useUser";
import CreateEvent from "./pages/Create_Event/CreateEvent";
import PrivateRoute from "./components/Private_Route/PrivateRoute";

export const url = 'http://127.0.0.1:8000'

function App() {

  const { user, setUser } = useUser()
  console.log(localStorage.getItem('refresh'))
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

          {/* <Route path='/create'>
            <PageTemplate>
              <CreateEvent />
            </PageTemplate>
          </Route> */}

          <PrivateRoute 
            path='/create' 
            isLoggedIn={localStorage.getItem('refresh')} 
            component={CreateEvent} 
          />

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
    </UserContext.Provider>
  );
}

export default App;


export const UserContext = createContext()