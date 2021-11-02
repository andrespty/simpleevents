import React from 'react'
import { useParams } from 'react-router'
import { Box } from '@chakra-ui/react'
import useEventDetails from './useEventDetails'
function EventDetails() {
    
    let { eventID } = useParams()
    useEventDetails(eventID)

    return (
        <Box>
            details
        </Box>
    )
}

export default EventDetails
