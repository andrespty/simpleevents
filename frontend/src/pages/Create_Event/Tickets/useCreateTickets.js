import { useEffect, useReducer, useState, useContext } from "react"
import { get_event } from "../../../utils/FetchFunctions"
import { create_ticket } from "../../../utils/CreateFunctions"
import { useHistory, useRouteMatch } from "react-router"

const useCreateTickets = (eventID, userID) => {
    console.log(userID)
    const [ ticketList, setTicketList ] = useReducer(reducer, initialInfo)
    const [ id, setId ] = useState(0)
    const [ ticketNumber, setTicketNumber ] = useState(1)
    const [ isSubmitted, setIsSubmitted ] = useState(false)
    
    let history = useHistory() 
    let match = useRouteMatch()   

    useEffect(() => {
        get_event(eventID)
        .then(json => {
            console.log(json.data.creator.id)
            console.log(json.data.creator.id !== userID)
            if (json.data.creator.id !== userID){
                history.push('/')
            }
            else{
                console.log(json.data)
                setId(json.data.id)
            }
            
        })
    },[])

    const add_ticket = () => {
        setTicketList({type:'add', id:ticketNumber + 1})
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

const initialInfo = [
    {
        id: 1,
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
                    id: action.id,
                    name:'',
                    price:0,
                    description:'',
                    isAvailable:true,
                    amount:0
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