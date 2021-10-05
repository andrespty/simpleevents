import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

function EventCard({ info }) {

    console.log(info)

    return (
        <Box>
            
            <Heading as='h3' size='lg'>{ info.name }</Heading>
            <Text>{ info.date }</Text>
        </Box>
    )
}

export default EventCard
