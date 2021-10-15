import React, { useContext } from 'react'
import { ButtonGroup, Button, Box, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { UserContext } from '../../App'

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
            <LoggedInNavBar redirect={redirect} isActive={isActive} />
        )
    }
    else{
        return(
            <GuestNavBar redirect={redirect} isActive={isActive} />
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


