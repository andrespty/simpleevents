import React from 'react'
import { Heading, Flex, Box, Spacer, IconButton } from "@chakra-ui/react"
import { useHistory } from 'react-router'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavBar from './NavBar'
import DrawerMenu from './DrawerMenu'

function Header() {

    let history = useHistory()

    const redirect = (page) => {
        history.push(`${page}`)
    }

    return (
        <Flex bg='white' p={4} borderBottomRadius={20} boxShadow='lg' >
            <Box>
                <Heading onClick={() => redirect('')} cursor='pointer'>
                    Simple Events
                </Heading>
            </Box>

            <Spacer/>

            <Box display={{base:'none', md:'inherit'}}>
                <NavBar redirect={redirect} />
            </Box>

            <Box display={{base:'inherit', md:'none'}}>
                <DrawerMenu redirect={redirect}/>
            </Box>
        </Flex>
    )
}

export default Header
