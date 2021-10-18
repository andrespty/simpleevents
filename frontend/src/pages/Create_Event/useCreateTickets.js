import { useEffect, useReducer, useState } from "react"
import { get_event } from "../../utils/FetchFunctions"

const useCreateTickets = (eventID) => {
    
    const [ ticketList, setTicketList ] = useReducer(reducer, initialInfo)
    const [ id, setId ] = useState(0)
    
    useEffect(() => {
        console.log(eventID)
        get_event(eventID)
        .then(json => {
            setId(json.data.id)
        })
    },[])

    const submit = () => {
        console.log(id)
    }

    return { ticketList, setTicketList, submit }
}

export default useCreateTickets

const initialInfo = []

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}