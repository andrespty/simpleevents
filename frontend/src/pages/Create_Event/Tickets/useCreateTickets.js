import { useEffect, useReducer, useState, useContext } from "react"
import { get_event } from "../../../utils/FetchFunctions"
import { create_ticket } from "../../../utils/CreateFunctions"
import { useHistory, useRouteMatch } from "react-router"

const useCreateTickets = (eventID, userID) => {

    const [ ticketList, setTicketList ] = useReducer(reducer, initialInfo)
    const [ ticketNumber, setTicketNumber ] = useState(1)
    const [ isSubmitted, setIsSubmitted ] = useState(false)
    const [ ticketState, setTicketState ] = useState(initialState)
    
    let history = useHistory() 
    let match = useRouteMatch()   

    useEffect(() => {
        get_event(eventID)
        .then(json => {

            if (json.data.creator.id !== userID){
                history.push('/')
            }
            else{
                console.log(json.data)
                if ( json.data.tickets.length > 0){
                    let loadTickets = json.data.tickets
                    loadTickets.forEach((ticket, index) => {
                        ticket.ticket_id = index + 1
                    })
                    console.log(loadTickets)
                    setTicketState(state => ({...state, hasTickets:true}))
                    setTicketList({type:'load', value:loadTickets})
                }
            }
            
        })
        .catch(err => console.log(err))
    },[])

    const add_ticket = () => {
        setTicketList({type:'add', ticket_id:ticketNumber + 1})
        setTicketNumber(state => state + 1)
    }
        
    const submit = (e) => {
        e.preventDefault()
        ticketList.forEach((ticket) => {
            ticket.event = eventID
        })
        setIsSubmitted(true)
        create_ticket(ticketList)
        .then(json=>{
            console.log(json)
            setIsSubmitted(false)
            history.push(`${match.url}/details`)
        })
        .catch(err => console.log(err))
    }

    return { ticketList, setTicketList, submit, add_ticket, isSubmitted }
}

export default useCreateTickets

const initialState = {
    hasTickets: false
}

const initialInfo = [
    {
        ticket_id: 1,
        name:'',
        price:0,
        description:'',
        isAvailable:true,
        amount:0
    }
]

const reducer = (state, action) => {

    switch(action.type){
        case 'add':
            return [
                ...state,
                {
                    ticket_id: action.ticket_id,
                    name:'',
                    price:0,
                    description:'',
                    isAvailable:true,
                    amount:0
                }
            ]

        case 'remove':
            var newState = state.filter(ticket => ticket.ticket_id !== action.id)
            return [
                ...newState
            ]

        case 'modify':
            let object = state.filter(ticket => ticket.ticket_id === action.id)[0]
            object[action.att] = action.value
            return [
                ...state,
            ]
        
        case 'load':
            return action.value

        default:
            return initialInfo

    }
}