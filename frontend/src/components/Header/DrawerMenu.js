import React from 'react'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, 
    Box, IconButton, useDisclosure, Flex, Spacer } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import NavBar from './NavBar'

function DrawerMenu({ redirect }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const close_drawer = (e) => {
        redirect(e)
        onClose()
    }

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
                autoFocus={false}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerBody 
                        d='flex' 
                        flexDirection='column'
                    >

                        <Spacer/>
                        <NavBar direction='column' redirect={close_drawer} />   

                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>

                </DrawerContent>
            </Drawer>

        </Box>
    )
}

export default DrawerMenu
