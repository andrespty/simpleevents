import { useReducer, useState } from "react"
import { url } from "../../App"
import { UserContext } from "../../App"
import { useContext } from "react"

const useLoginSignup = (isLogin) => {
    const [ info, setInfo ] = useReducer(reducer, initialState)
    const [ error, setError ] = useReducer(errorReducer, initialStateErrors)
    const { setUser } = useContext(UserContext)
    const [ loading, setLoading ] = useState(false)

    const fetchUrl = isLogin ? `${url}/api/token/` : `${url}/api/models/user/`

    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(fetchUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if ((isLogin && !json.access) || (!isLogin && !json.token)){
                console.log('error')
                setError(json)
            }
            else{
                if ( isLogin ){
                    let user = JSON.parse(window.atob(json['access'].split('.')[1]))
                    setUser({type:'loginSignup', ...user})
                    localStorage.setItem('access', json.access)
                    localStorage.setItem('refresh', json.refresh)
                }
                else{
                    setUser({type:'loginSignup', ...json})
                    localStorage.setItem('access', json.token.access)
                    localStorage.setItem('refresh', json.token.refresh)
                }
                setError()
            }
            setLoading(false)
        })

        console.log('submited')
    }

    return { setInfo, submit, loading, error }
}

export default useLoginSignup

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
}

const initialStateErrors = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    detail: ''
}

const errorReducer = (state, action) => {
    return {
        ...initialStateErrors,
        ...action
    }
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.attribute]: action.value
    }
}