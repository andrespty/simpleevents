import React from 'react'
import { Box } from '@chakra-ui/layout'
import Header from '../components/Header/Header'

function PageTemplate({ children }) {
    console.log(children)
    return (
        <Box>
            <Header />
            {children}
        </Box>
    )
}

export default PageTemplate
