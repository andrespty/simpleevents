import React from 'react'
import { Box, Progress, Center, Flex, Spacer } from '@chakra-ui/react'

function StepsProgressBar() {
    return (
        <Center >
            <Box w='60%' position='relative' >
                
                <Progress value={50} colorScheme='primary' size='xs' />
                
                <Flex
                    direction='row'
                    w='100%'
                    position='absolute'
                    top={-6}
                >

                    <CircleFeedback label='Event' icon='1' variant='completed' />
                    
                    <Spacer/>

                    <CircleFeedback label='Tickets' icon='2' variant='focus' />
                    
                    <Spacer />

                    <CircleFeedback label='Done' icon='3' variant='nothing' />
        
                </Flex>


            </Box>
        </Center>
    )
}

export default StepsProgressBar

const CircleFeedback = ({ label, icon, variant }) => {



    return(
        <Box>
            <Center>
                <Box
                    w={12}
                    h={12}
                    borderRadius='50%'
                    border='2px solid'
                    style={{...variants[variant]}}
                >

                    <Center h='100%' w='100%'>
                        {icon}
                    </Center>

                </Box>
            </Center>

            <Center>
                {label}
            </Center>

        </Box>
    )
}

const variants = {
        completed: {
            background:'#1d40fe',
            color:'white',
            borderColor:'white'
        },
        focus :{
            background: 'white',
            color:'black',
            borderColor:'#1d40fe'
        },
        nothing:{
            background:'white',
            color:'black',
            borderColor:'white'
        }
    }