import { useEffect, useReducer, useState } from "react"
import { get_event } from "../../utils/FetchFunctions"
import { create_ticket } from "../../utils/CreateFunctions"

const useCreateTickets = (eventID) => {
    
    const [ ticketList, setTicketList ] = useReducer(reducer, initialInfo)
    const [ id, setId ] = useState(0)
    const [ ticketNumber, setTicketNumber ] = useState(1)
    const [ isSubmitted, setIsSubmitted ] = useState(false)
    
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
        let forms = []

        ticketList.forEach((ticket) => {
            console.log(ticket)
            let form_data = new FormData()

            form_data.append('name', ticket.name)
            form_data.append('event', eventID)
            form_data.append('price', ticket.price)
            form_data.append('description', ticket.description)
            form_data.append('amount', ticket.amount)
            form_data.append('isAvailable', ticket.isAvailable)
            forms.push(form_data)
            // create_ticket(form_data)
            // .then(json => {
            //     console.log(json)
            // })
            // .catch(err => console.log(err))
        })

        // console.log(id)
        // console.log(ticketNumber)
        // console.log(ticketList)
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