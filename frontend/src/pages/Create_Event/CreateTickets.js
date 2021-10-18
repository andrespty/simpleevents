import React from 'react'
import useCreateTickets from './useCreateTickets'
import { useParams } from 'react-router'
import { Input, FormControl, FormLabel, Box, Stack, Button } from '@chakra-ui/react'
function CreateTickets() {

    let { eventID } = useParams()
    const { ticketList, setInfo, submit } = useCreateTickets(eventID)

    return (
        <Box>
            <form onSubmit={submit} >

                <TicketField/>
                {
                    ticketList.map((ticket, key)=>(
                        <TicketField/>
                    ))
                }

                <Button>Add ticket</Button>

                <Button>Save tickets</Button>

            </form>
        </Box>
    )
}

export default CreateTickets

const TicketField = () => {
    return(
        <Stack direction='row' align='center' >
            <Field isRequired={true} label='Ticket type'>
                <Input />
            </Field>
            <Field isRequired={true} label='Price'>
                <Input type='number' />
            </Field>
        </Stack>
    )
}

const Field = ({ label, placeholder, error, isInvalid, children, isRequired, ...props }) => {
    return(
        <FormControl isRequired={isRequired} my={2} isInvalid={isInvalid}>
            <FormLabel my={0}>{label}</FormLabel>
            {children}
        </FormControl>
    )
}