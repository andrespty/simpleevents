import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CreateEventForm from './CreateEventForm'

function CreateEvent() {
    return (
        <Box>
            <Heading>
                Create Event
            </Heading>

            <CreateEventForm />

        </Box>
    )
}

export default CreateEvent
