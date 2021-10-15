import React from 'react'
import { ButtonGroup, Button, Box, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router'

function NavBar({ redirect, direction='horizontal' }) {

    let location = useLocation()

    const isActive = (path) => {
        if (path === location.pathname){
            return 'red'
        }
        else{
            return 'ghost'
        }
    }

    return (
        <Box w='100%'>
            <Stack spacing={15} direction={direction}>
                <NavButton onClick={() => redirect('/whyus')} color={isActive('/whyus')}>Why Us?</NavButton>
                <NavButton onClick={() => redirect('/contact')} color={isActive('/contact')}>Help</NavButton>
                <NavButton onClick={() => redirect('/contact')} color={isActive('/contact')}>Create Event</NavButton>
                <NavButton onClick={() => redirect('/login')} >Log In</NavButton>
            </Stack>
        </Box>
    )
}

export default NavBar

export const SignedUpNavBar = () => {
    return(
        <Box>

        </Box>
    )
}

const NavButton = ({ onClick, children, ...props}) => {
    return(
        <Box 
            p={3} 
            borderRadius={5}
            _hover={{bg:'blue.100'}} 
            style={{transition:'0.3s'}} 
            onClick={onClick}
            cursor='pointer'
        >
            <Text fontSize='lg' {...props} >
                {children}
            </Text>
        </Box>
    )
}


