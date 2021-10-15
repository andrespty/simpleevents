import { useReducer, useEffect } from "react"
import { check_token } from "./utils/FetchFunctions"

const useUser = () => {
    const [ user, setUser ] = useReducer(userReducer, initialUser)
    
    useEffect(() => {
        if (localStorage.getItem('refresh')){
            check_token()
            .then(json => {
                if (json.access){
                    localStorage.setItem('access', json.access)
                    let user = JSON.parse(window.atob(json['access'].split('.')[1]))
                    setUser({type:'loginSignup', ...user})
                }
            })
        }
    },[])

    return { user, setUser }
}

const initialUser = {
    id:0,
    first_name: '',
    last_name: '',
    email: '',
    isLoggedIn:false
  }
  
const userReducer = (state, action) => {
switch(action.type){
    case 'loginSignup':
    return {
        ...state,
        id: action.id,
        first_name: action.first_name,
        last_name: action.last_name,
        email: action.email,
        isLoggedIn: true
    }
    case 'update':
    return {
        ...state,
        [action.attribute]: action.value
    }
    
    case 'logout':
    localStorage.removeItem('refresh')
    localStorage.removeItem('access')
    return initialUser

    default:
    return initialUser
}
}
  

export default useUser