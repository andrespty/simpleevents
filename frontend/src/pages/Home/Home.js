import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import AllEvents from './All_Events'

function Home() {

    return (
        <Box>
            <Box m={3}>
                <Heading>
                    Events
                </Heading>
            </Box>
            <AllEvents />
        </Box>
    )
}

export default Home

  
