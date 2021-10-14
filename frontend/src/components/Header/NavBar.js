import React from 'react'
import { ButtonGroup, Button, Box, Stack } from '@chakra-ui/react'
import { useLocation } from 'react-router'

function NavBar({ redirect, direction='horizontal' }) {

    let location = useLocation()

    const isActive = (path) => {
        if (path === location.pathname){
            return 'navbar'
        }
        else{
            return 'ghost'
        }
    }

    return (
        <Box w='100%'>
            <Stack spacing={15} direction={direction} isFullWidth >
                <NavButton onClick={() => redirect('/')} variant={isActive('/')}>Home</NavButton>
                <NavButton onClick={() => redirect('/events')} variant={isActive('/events')}>Events</NavButton>
                <NavButton onClick={() => redirect('/dashboard')} variant={isActive('/dashboard')}>Dashboard</NavButton>
                <NavButton onClick={() => redirect('/contact')} variant={isActive('/contact')}>Contact Us</NavButton>
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

const NavButton = ({ path, children, ...props}) => {
    return(
        <Button size='lg' {...props}>
            {children}
        </Button>
    )
}


