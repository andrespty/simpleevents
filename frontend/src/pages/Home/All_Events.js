import React, { useEffect, useReducer } from 'react'
import { get_events } from '../../utils/FetchFunctions'
import EventCard from '../../components/Cards/EventCard'
import { Grid, GridItem, Box } from '@chakra-ui/react'

function AllEvents() {

    const [ events, setEvents ] = useReducer(reducer, initialState)

    useEffect(() => {
        get_events()
        .then(json => {
            setEvents(json)
        })
    },[])

    return (
        <Box>
            <Grid templateColumns='repeat(6,1fr)' gap={3} >
            {
                events.map((event, key) => (

                    <GridItem key={key} colSpan={{base:3, md:2, lg:1}} >
                    
                        <EventCard info={event} />
                    
                    </GridItem>

                ))
            }
            </Grid>
        </Box>
    )
}

export default AllEvents

const initialState = []

const reducer = (state, action) => {
    return [
        ...state,
        ...action
    ]
}