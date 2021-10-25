import { Redirect, Route } from "react-router"

function PrivateRoute({component:Component, ...rest}) {

    if (rest.isLoggedIn){
        console.log(rest.isLoggedIn)
    }else{
        console.log('Bye')
        console.log(rest)
    }

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