import React, { useContext } from 'react'
import {  Button, Box, Stack } from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { UserContext } from '../../App'
import './NavBar.css'

function NavBar({ redirect, direction='horizontal' }) {

    const { user } = useContext(UserContext)

    let location = useLocation()

    const isActive = (path) => {
        if (path === location.pathname){
            return 'navbar_active'
        }
        else{
            return 'navbar_deactive'
        }
    }

    if (user.isLoggedIn){
        return(
            <LoggedInNavBar redirect={redirect} isActive={isActive} direction={direction} />
        )
    }
    else{
        return(
            <GuestNavBar redirect={redirect} isActive={isActive} direction={direction} />
        )
    }
}

export default NavBar

const LoggedInNavBar = ({ redirect, direction='horizontal', isActive }) => {
    return(
        <Box>
            <Stack spacing={15} direction={direction}>
                <NavButton onClick={() => redirect('/')} variant={isActive('/')}>Home</NavButton>
                <NavButton onClick={() => redirect('/dashboard')} variant={isActive('/dashboard')}>Dashboard</NavButton>
                <NavButton onClick={() => redirect('/create')} variant={isActive('/create')}>Create Event</NavButton>
                <NavButton onClick={() => console.log('User')} variant='navbar_deactive'>User</NavButton>
            </Stack>
        </Box>
    )
}

const GuestNavBar = ({ redirect, direction='horizontal', isActive}) => {
    return(
        <Box w='100%'>
            <Stack spacing={15} direction={direction}>
                <NavButton onClick={() => redirect('/')} variant={isActive('/')}>Home</NavButton>
                <NavButton onClick={() => redirect('/whyus')} variant={isActive('/whyus')}>Why Us?</NavButton>
                <NavButton onClick={() => redirect('/contact')} variant={isActive('/contact')}>Help</NavButton>
                <NavButton onClick={() => redirect('/signup')} variant={isActive('/create')}>Create Event</NavButton>
                <NavButton onClick={() => redirect('/login')} variant={'outline'} colorScheme={'primary'} >Log In</NavButton>
            </Stack>
        </Box>
    )
}

const NavButton = ({ onClick, children, ...props}) => {

    return (
        <Button onClick={onClick} {...props}>
            {children}
        </Button>
    )
}


