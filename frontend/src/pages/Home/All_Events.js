import React, { useEffect, useReducer } from 'react'
import { get_events } from '../../utils/FetchFunctions'
import EventCard from '../../components/Cards/EventCard'
import { Grid } from '@chakra-ui/react'

function AllEvents() {

    const [ events, setEvents ] = useReducer(reducer, initialState)
    console.log(events)
    useEffect(() => {
        get_events()
        .then(json => {
            console.log(json)
            setEvents(json)
        })
    },[])

    return (
        <div>
            <Grid templateColumns='repeat(5,1fr)' gap={2} >
            {
                events.map((event, key) => (
                    <EventCard key={key} info={event} />
                ))
            }
            </Grid>
        </div>
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