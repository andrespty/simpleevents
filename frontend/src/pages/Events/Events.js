import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/layout'
import { get_events } from '../../utils/FetchFunctions'

function Events() {

    // Get basic info of events: name, date, image
    useEffect(() => {
        get_events()
        .then(json => {
            console.log(json)
        })
    })

    return (
        <Box bg='red.100'>
            Show all events <br/>
            Will have a search bar and filter <br/>
            to filter events and show them
        </Box>
    )
}

export default Events
