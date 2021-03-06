import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { Input, Box, Stack, Divider, Center, IconButton, Checkbox } from '@chakra-ui/react'
import InputNumber from '../../../components/Inputs/InputNumber'
import InputField from '../../../components/Inputs/InputField'

function CreateTicketList({ ticketList, setTicketList }) {
    return (
        <Box m={3} overflowY='auto' h='65vh'>
            {
                ticketList.map((ticket, key)=>(
                    <TicketField key={key} ticket={ticket} setTicketList={setTicketList} />
                ))
            }   
        </Box>
    )
}

export default CreateTicketList

const TicketField = ({ticket, setTicketList}) => {
    
    const {remove_ticket, modify_ticket} = setTicketList

    return(
        <>
        {
            ticket.ticket_id === 1
            ? null
            :<Center><Divider my={3} w='90%' /></Center>
        }
        <Stack direction='row' align='end' >

            <InputField isRequired={true} label='Ticket Name'>
                <Input 
                    value={ticket.name}
                    onChange={(e) => modify_ticket(ticket.ticket_id, e.target.value, 'name')}
                />
            </InputField>
            
            <InputNumber 
                label='Price' 
                isRequired={true} 
                value={ticket.price}
                // onChange={(value) => setTicketList({type:'modify', id:ticket.ticket_id, value:value, att:'price'})}
                onChange={(value) => modify_ticket(ticket.ticket_id, value, 'price')}
                precision={2}
            />
            
            <InputNumber 
                label='Amount Available' 
                isRequired={true} 
                value={ticket.amount}
                // onChange={(value) => setTicketList({type:'modify', id:ticket.ticket_id, value:value, att:'amount'})}
                onChange={(value) => modify_ticket(ticket.ticket_id, value, 'amount')}
            />
            
            {
                ticket.ticket_id === 1
                ? null
                :<IconButton onClick={() => remove_ticket(ticket.ticket_id)} icon={<CloseIcon/>} mt={5} />
            }
        
        </Stack>
        <InputField isRequired={false} label='Description'>
            <Input 
                value={ticket.description}
                // onChange={(e) => setTicketList({type:'modify', id:ticket.ticket_id, value:e.target.value, att:'description'})}
                onChange={(e) => modify_ticket(ticket.ticket_id, e.target.value, 'description')}
            />
        </InputField>
        
        {/* <Checkbox defaultChecked value={ticket.isAvailable} onChange={(e) => setTicketList({type:'modify', id:ticket.ticket_id, value:e.target.checked, att:'isAvailable'})} > */}
        <Checkbox defaultChecked value={ticket.isAvailable} onChange={(e) => modify_ticket(ticket.ticket_id, e.target.checked, 'isAvailable')} >
            Make available
        </Checkbox>
        </>
    )
}