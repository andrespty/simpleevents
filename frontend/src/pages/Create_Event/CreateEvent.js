import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CreateEventForm from './CreateEventForm'
import { Switch, Route, useRouteMatch } from 'react-router'
import CreateTickets from './CreateTickets'

function CreateEvent() {

    let match = useRouteMatch()

    return (
        <Box>
            <Heading>
                Create Event
            </Heading>

            <Switch>

                <Route path={`${match.path}/:eventID/`} >
                    <CreateTickets />
                </Route>

                <Route path={`${match.path}/`}>
                    <CreateEventForm />
                </Route>

            </Switch>

        </Box>
    )
}

export default CreateEvent
