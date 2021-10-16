import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

function UserDropDown({ children, ...props }) {
    return (
        <Menu>
            <MenuButton as={Button} {...props}  rightIcon={<ChevronDownIcon/>} >
                {children}
            </MenuButton>
            <MenuList>
                <MenuItem>Tickets</MenuItem>
                <MenuItem>Create Event</MenuItem>
                <MenuItem>Manage Events</MenuItem>

                <MenuDivider />

                <MenuItem>Log Out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserDropDown
