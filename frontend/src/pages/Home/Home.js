import React, { useEffect, useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import { Box } from '@chakra-ui/react'

function Home() {

    let { path } = useRouteMatch()

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
        </Box>
    )
}

export default Home
