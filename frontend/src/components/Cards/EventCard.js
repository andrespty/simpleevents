import React from 'react'
import { Box, Heading, Text, Image, Flex, Spacer } from '@chakra-ui/react'
import { FormatDate } from '../../utils/UtilitiesFunctions'

function EventCard({ info }) {

    const {date, time} = FormatDate(info.date)

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

                <Flex direction='row'>
                    <Text fontSize='md'>
                        { date }
                    </Text>

                    <Spacer />

                    <Text fontSize='md'>
                        { time }
                    </Text>
                </Flex>

                {/* <Text>{ info.location }</Text> */}
            
            </Box>

        </Box>
    )
}

export default EventCard
