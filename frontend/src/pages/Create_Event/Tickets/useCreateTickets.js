import { useEffect, useReducer, useState } from "react"
import { get_event } from "../../../utils/FetchFunctions"
import { create_ticket } from "../../../utils/CreateFunctions"
import { useHistory, useRouteMatch } from "react-router"
import { create_and_update_tickets, delete_tickets } from "../../../utils/ActionFunctions"

const useCreateTickets = (eventID, userID) => {

    const [ ticketList, setTicketList ] = useReducer(reducer, initialInfo) // renders in the frontend 
    const [ ticketNumber, setTicketNumber ] = useState(1) // for ticket creation and tracking
    const [ ticketState, setTicketState ] = useState(initialState) // keeps track of state of ticketing
    
    let history = useHistory() 
    let match = useRouteMatch()   

    useEffect(() => {
        get_event(eventID)
        .then(json => {

            //Checks if user is able to perform changes
            if (json.data.creator.id !== userID){
                history.push('/')
            }

            else{
                console.log(json.data)
                if ( json.data.tickets.length > 0){
                    let loadTickets = json.data.tickets
                    let ticketsNumber = 0

                    // Adding ticket id to keep track of them in the frontend
                    loadTickets.forEach((ticket, index) => {
                        ticket.ticket_id = index + 1
                        ticketsNumber += 1
                    })
                    
                    setTicketNumber(ticketsNumber)
                    setTicketState(state => ({...state, hasTickets:true}))
                    setTicketList({type:'load', value:loadTickets})
                }
            }
            
        })
        .catch(err => console.log(err))
    },[])

    const add_ticket = () => {
        setTicketState(state => ({...state, hasAddTickets:true}))
        setTicketList({type:'add', ticket_id:ticketNumber + 1})
        setTicketNumber(state => state + 1)
    }

    const remove_ticket = (ticket_id) => setTicketList({type:'remove', ticket_id:ticket_id})
    

    const modify_ticket = (ticket_id, value, att) => {
        setTicketList({type:'modify', ticket_id:ticket_id, value:value, att:att})
    }

        
    const submit = (e) => {
        e.preventDefault()
        console.log(ticketState)
        ticketList.forEach((ticket) => {
            ticket.event = eventID
        })
        setTicketState(state => ({...state, isSubmitted:true}))
        create_ticket(ticketList)
        .then(json=>{
            console.log(json)
            setTicketState(state => ({...state, isSubmitted:false}))
            history.push(`${match.url}/details`)
        })
        .catch(err => console.log(err))
    }

    return { ticketList, remove_ticket, modify_ticket, submit, add_ticket, isSubmitted:ticketState.isSubmitted }
}

export default useCreateTickets

const initialState = {
    hasTickets: false,     // Tickets already existed
    hasAddTickets: false,  // Tickets were added (must create new tickets)
    isSubmitted: false     // Has been submitted
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
    /*
        Action Types:

        add: Adds a new ticket, requires the next ticket_id
        remove: Removes ticket from ticketList, requires ticket_id
        modify: Modifies a single ticket, requires ticket_id and value
        load: if event has tickets created, this action loads the tickets into ticketList
    */

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
            var newState = state.filter(ticket => ticket.ticket_id !== action.ticket_id)
            return [
                ...newState
            ]

        case 'modify':
            let object = state.filter(ticket => ticket.ticket_id === action.ticket_id)[0]
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