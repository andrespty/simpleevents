import React, { useEffect, useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import { Box } from '@chakra-ui/react'
import { get_events } from '../../utils/FetchFunctions'
import EventCard from '../../components/Cards/EventCard'

function Home() {

    let { path } = useRouteMatch()

    const [ info, setInfo ] = useState()
    useEffect(() => {
        get_events()
        .then(json=>{
            console.log(json)
            setInfo(json[4])
        })
    }, [])

    console.log(path)
    return (
        <Box>
            
            <Switch>

                <Route path={`${path}/events/`}>
                    events
                </Route>

                <Route path={`${path}/`}>
                    home
                </Route>

            </Switch>

            {
                info
                ?<EventCard info={info} />
                : null
            }

        </Box>
    )
}

export default Home
