import { useReducer, useEffect } from "react"
import { get_event } from "../../../utils/FetchFunctions"

const useEventDetails = (eventID) => {
    
    const [ eventDetails, setEventDetails ] = useReducer()

    useEffect(() => {
        get_event(eventID)
        .then(json => {
            console.log(json.data)
        })
    },[])

}

export default useEventDetails

const initialEventDetails = {
    location:'',
    organizer:'',
    links:'',
    isOnline:'',
    description:''
}

const reducer = (state, action) => {
    return {
        ...state, 
        ...action
    }
}