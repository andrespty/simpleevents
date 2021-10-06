import React from 'react'
import { Heading, Flex, Box, Spacer, ButtonGroup, Button, IconButton } from "@chakra-ui/react"
import { useHistory } from 'react-router'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavBar from './NavBar'

function Header() {

    let history = useHistory()

    const redirect = (page) => {
        history.push(`${page}`)
    }

    return (
        <Flex bg='gray.400' p={2}>
            <Box>
                <Heading onClick={() => redirect('')} cursor='pointer'>
                    Simple Events
                </Heading>
            </Box>

            <Spacer/>

            <NavBar redirect={redirect} />

            <Box>
                <IconButton icon={<HamburgerIcon fontSize='xl'/>} />
            </Box>
        </Flex>
    )
}

export default Header
