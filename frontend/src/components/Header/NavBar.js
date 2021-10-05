import React, { useEffect } from 'react'
import { ButtonGroup, Button, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router'

function NavBar({ redirect }) {

    let location = useLocation()

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

    return (
        <Box>
            <ButtonGroup variant='ghost' spacing={2}>
                <Button onClick={() => redirect('/')}>Home</Button>
                <Button onClick={() => redirect('/events')}>Events</Button>
                <Button onClick={() => redirect('/dashboard')}>Dashboard</Button>
                <Button onClick={() => redirect('/contact')}>Contact Us</Button>
            </ButtonGroup>
        </Box>
    )
}

export default NavBar


