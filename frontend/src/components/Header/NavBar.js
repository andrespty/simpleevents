import React, { useEffect } from 'react'
import { ButtonGroup, Button, Box, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { check_token } from '../../utils/FetchFunctions'

function NavBar({ redirect, direction='horizontal' }) {

    let location = useLocation()

    const isActive = (path) => {
        if (path === location.pathname){
            return 'navbar_active'
        }
        else{
            return 'navbar_deactive'
        }
    }

    useEffect(() => {
        if (localStorage.getItem('refresh')){
            check_token()
            .then(json => {
                if (json.access){
                    console.log('Has access')
                }
                else{
                    console.log('No access')
                }
            })
        }
    }, [])

    return (
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

export default NavBar

const SignedUpNavBar = ({ redirect, direction='horizontal', isActive }) => {
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

    // return(
    //     <Box 
    //         p={3} 
    //         borderRadius={5}
    //         _hover={{bg:'blue.100'}} 
    //         style={{transition:'0.3s'}} 
    //         onClick={onClick}
    //         cursor='pointer'
    //     >
    //         <Text fontSize='lg' {...props} >
    //             {children}
    //         </Text>
    //     </Box>
    // )
}


