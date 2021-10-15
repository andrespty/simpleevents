import React, { useState, useEffect } from 'react'
import { Heading, Flex, Box, Spacer, IconButton, keyframes, usePrefersReducedMotion } from "@chakra-ui/react"
import { useHistory } from 'react-router'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavBar from './NavBar'
import DrawerMenu from './DrawerMenu'
import useStickyEffect from './useStickyEffect'
import './NavBar.css'

function Header() {

    let history = useHistory()
    const redirect = (page, other) => {
        history.push(`${page}`)
    }
    const { isSticky, element } = useStickyEffect()

    return (
        <Flex 
            bg='white' 
            borderBottomRadius={20} 
            p={4}
            boxShadow='lg' 
            ref={element} 
            className={ isSticky ? 'navbar navbar-sticky' : 'navbar'}
        >
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

const moveDown = keyframes(`
from { transform: translateY(-5rem); }
to { transform: translateY(0rem); }
`)
export default Header
