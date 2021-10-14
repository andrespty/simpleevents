import React from 'react'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, 
    Box, IconButton, useDisclosure, Flex, Spacer } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import NavBar from './NavBar'

function DrawerMenu({ redirect }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>

            <IconButton 
                icon={<HamburgerIcon fontSize='xl' />} 
                variant='ghost'       
                onClick={onOpen}
            />

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerHeader>
                        Simple Events
                    </DrawerHeader>
                
                    <Spacer/>

                    <DrawerBody>

                        <NavBar direction='column' redirect={redirect} />   

                    </DrawerBody>

                    <DrawerFooter>
                        Hello
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>

        </Box>
    )
}

export default DrawerMenu
