import React from 'react'
import { ButtonGroup, Button, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router'

function NavBar({ redirect }) {

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
        <Box>
            <ButtonGroup variant='ghost' spacing={2}>
                <Button onClick={() => redirect('/')} variant={isActive('/')}>Home</Button>
                <Button onClick={() => redirect('/events')} variant={isActive('/events')}>Events</Button>
                <Button onClick={() => redirect('/dashboard')} variant={isActive('/dashboard')}>Dashboard</Button>
                <Button onClick={() => redirect('/contact')} variant={isActive('/contact')}>Contact Us</Button>
            </ButtonGroup>
        </Box>
    )
}

export default NavBar


