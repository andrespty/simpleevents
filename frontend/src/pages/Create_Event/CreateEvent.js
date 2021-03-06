import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CreateEventForm from './CreateEventForm'
import { Switch, Route, useRouteMatch } from 'react-router'
import CreateTickets from './Tickets/CreateTickets'
import EventDetails from './Details/EventDetails'
import PageTemplate from '../../utils/PageTemplates'

function CreateEvent() {

    let match = useRouteMatch()

    return (
        <PageTemplate>
        <Box>
            <Heading>
                Create Event
            </Heading>

            <Switch>

                <Route path={`${match.path}/:eventID`} >
                    <CreateEventDetails />
                </Route>

                <Route path={`${match.path}/`}>
                    <CreateEventForm />
                </Route>

            </Switch>

        </Box>
        </PageTemplate>
    )
}

export default CreateEvent

const CreateEventDetails = () => {

    let match = useRouteMatch()

    return(
        <Switch>

            <Route exact path={`${match.path}/details/`}>
                <EventDetails />
            </Route>  

            <Route path={`${match.path}`}>
                <CreateTickets/> 
            </Route>

        </Switch>
    )
}