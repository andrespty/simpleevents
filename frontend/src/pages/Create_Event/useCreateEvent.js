import { useReducer } from "react"

const useCreateEvent = () => {
    const [ info, setInfo ] = useReducer(reducer, initialInfo)

    return { info, setInfo }
}

export default useCreateEvent

const initialInfo = {
    name:'',
    poster:'',
    date: new Date()
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}