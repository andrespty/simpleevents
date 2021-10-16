import React from 'react'
import { Box } from '@chakra-ui/layout'
import Header from '../components/Header/Header'

function PageTemplate({ children }) {

    return (
        <Box>
            <Header />
            <Box pt={24} px={3} > {/* Should fix this */}
                {children}
            </Box>
        </Box>
    )
}

export default PageTemplate
