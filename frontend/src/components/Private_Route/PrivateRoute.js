import { Redirect, Route } from "react-router"

function PrivateRoute({component:Component, ...rest}) {
    return (
        <Route {...rest} 
            render={ props => 
                rest.isLoggedIn 
                ? <Component {...props} />
                : <Redirect to={{pathname: '/'}}/>
            }
        />
    )
}

export default PrivateRoute