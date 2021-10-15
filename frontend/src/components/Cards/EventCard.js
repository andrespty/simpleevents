import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'

function EventCard({ info }) {

    return (
        <Box 
            bg='white'
            borderRadius={5}
            style={{
                transition:'0.3s'
            }}
            _hover={{
                transform: 'scale(1.02)',
                boxShadow:'lg'
            }}
            cursor='pointer'
            boxShadow={'md'}
        >
            <Image 
                src={info.poster} 
                borderTopRadius={5} 
                objectFit={'cover'}     
            />
            
            <Box p={3}>

                <Heading as='h4' size='md'>
                    { info.name }
                </Heading>

                <Text fontSize='md'>
                    { info.date }
                </Text>
                {/* <Text>{ info.location }</Text> */}
            
            </Box>

        </Box>
    )
}

export default EventCard
