import { useEffect, useReducer, useState } from "react"
import { get_event } from "../../utils/FetchFunctions"

const useCreateTickets = (eventID) => {
    
    const [ ticketList, setTicketList ] = useReducer(reducer, initialInfo)
    const [ id, setId ] = useState(0)
    const [ ticketNumber, setTicketNumber ] = useState(1)

    
    useEffect(() => {
        console.log(eventID)
        get_event(eventID)
        .then(json => {
            setId(json.data.id)
        })
    },[])

    const add_ticket = () => {
        setTicketList({type:'add', id:ticketNumber + 1})
        setTicketNumber(state => state + 1)
    }
        
    const submit = () => {
        console.log(id)
        console.log(ticketNumber)
        console.log(ticketList)
    }

    return { ticketList, setTicketList, submit, add_ticket }
}

export default useCreateTickets

const initialInfo = [
    {
        id: 1,
        name:'',
        price:''
    }
]

const reducer = (state, action) => {

    switch(action.type){

        case 'add':
            return [
                ...state,
                {
                    id: action.id,
                    name:'',
                    price:''
                }
            ]

        case 'remove':
            var newState = state.filter(ticket => ticket.id !== action.id)
            return [
                ...newState
            ]

        case 'modify':
            let object = state.filter(ticket => ticket.id === action.id)[0]
            object[action.att] = action.value
            return [
                ...state,
            ]

        default:
            return initialInfo

    }
}