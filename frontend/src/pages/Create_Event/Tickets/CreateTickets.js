import React, { useContext } from 'react'
import useCreateTickets from './useCreateTickets'
import { useParams } from 'react-router'
import { Box, Button, Flex, Spacer, ButtonGroup } from '@chakra-ui/react'
import CreateTicketList from './CreateTicketList'
import { AddIcon } from '@chakra-ui/icons'
import { UserContext } from '../../../App'
import Loader from '../../../components/Loader/Loader'

function CreateTickets() {

    let { eventID } = useParams()
    const { user } = useContext(UserContext)
    

    return (
        <>
            {
                user.isLoading
                ? <Loader />
                : <CreateTicketsComponent eventID={eventID} userID={user.id} />
            }
        </>
    )
}

export default CreateTickets

const CreateTicketsComponent = ({eventID, userID}) => {
    
    const { ticketList, submit, add_ticket, isSubmitted, remove_ticket, modify_ticket } = useCreateTickets(eventID, userID)
    
    return(
        <Box>
            <form onSubmit={submit} >

                <CreateTicketList ticketList={ticketList} 
                    setTicketList={{remove_ticket, modify_ticket}}
                />

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