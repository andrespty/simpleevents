import React, { useContext } from 'react'
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { UserContext } from '../../App'

function UserDropDown({ children, ...props }) {

    const { setUser } = useContext(UserContext)

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

                <MenuItem onClick={() => setUser({type:'logout'})}>Log Out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserDropDown
