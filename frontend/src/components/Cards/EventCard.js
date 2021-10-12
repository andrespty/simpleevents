import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'

function EventCard({ info }) {

    console.log(info)

    return (
        <Box>
            <Image src={info.poster} borderRadius={10} boxSize={150} />
            <Heading as='h3' size='lg'>{ info.name }</Heading>
            <Text>{ info.date }</Text>
        </Box>
    )
}

export default EventCard
