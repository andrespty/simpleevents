import { useReducer } from "react"
import { url } from "../../App"

const useLoginSignup = (isLogin) => {
    const [ info, setInfo ] = useReducer(reducer, initialState)

    const submit = (e) => {
        e.preventDefault()

        fetch(`${url}/api/models/user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })

        console.log('submited')
    }

    return { setInfo, submit }
}

export default useLoginSignup

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.attribute]: action.value
    }
}