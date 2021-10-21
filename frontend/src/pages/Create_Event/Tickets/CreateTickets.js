import React from 'react'
import useCreateTickets from './useCreateTickets'
import { useParams } from 'react-router'
import { Box, Button, Flex, Spacer, ButtonGroup } from '@chakra-ui/react'
import CreateTicketList from './CreateTicketList'
import { AddIcon } from '@chakra-ui/icons'

function CreateTickets() {

    let { eventID } = useParams()
    const { ticketList, submit, add_ticket, setTicketList, isSubmitted } = useCreateTickets(eventID)

    return (
        <Box>
            <form onSubmit={submit} >

                <CreateTicketList ticketList={ticketList} setTicketList={setTicketList} />

                <Flex  w='100%' direction='row'  >
                    
                    <Spacer/>

                    <ButtonGroup>
                        <Button onClick={add_ticket} leftIcon={<AddIcon />} >Add ticket</Button>

                        <Button type='submit' colorScheme='primary' isLoading={isSubmitted} >Save tickets</Button>
                    </ButtonGroup>

                </Flex>

            </form>
        </Box>
    )
}

export default CreateTickets
