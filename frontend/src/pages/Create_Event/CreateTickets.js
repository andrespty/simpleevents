import React from 'react'
import useCreateTickets from './useCreateTickets'
import { useParams } from 'react-router'
import { Input, FormControl, FormLabel, Box, Stack, Button } from '@chakra-ui/react'
function CreateTickets() {

    let { eventID } = useParams()
    const { ticketList, submit, add_ticket, setTicketList } = useCreateTickets(eventID)

    return (
        <Box>
            <form onSubmit={submit} >

                {
                    ticketList.map((ticket, key)=>(
                        <TicketField key={key} ticket={ticket} setTicketList={setTicketList} />
                    ))
                }

                <Button onClick={add_ticket} >Add ticket</Button>

                <Button onClick={submit} >Save tickets</Button>

            </form>
        </Box>
    )
}

export default CreateTickets

const TicketField = React.memo(({ticket, setTicketList}) => {

    console.log(ticket)
    const remove = (id) => {
        setTicketList({type:'remove', id:id})
    }

    return(
        <Stack direction='row' align='center'>

            <Field isRequired={true} label='Ticket type'>
                <Input 
                    value={ticket.name}
                    onChange={(e) => setTicketList({type:'modify', id:ticket.id, value:e.target.value, att:'name'})}
                />
            </Field>

            <Field isRequired={true} label='Price'>
                <Input type='number' />
            </Field>

            {
                ticket.id === 1
                ? null
                :<Button onClick={() => remove(ticket.id)} >Remove</Button>
            }

        </Stack>
    )
})

const Field = ({ label, placeholder, error, isInvalid, children, isRequired, ...props }) => {
    return(
        <FormControl isRequired={isRequired} my={2} isInvalid={isInvalid}>
            <FormLabel my={0}>{label}</FormLabel>
            {children}
        </FormControl>
    )
}