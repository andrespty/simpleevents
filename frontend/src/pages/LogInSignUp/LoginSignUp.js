import React from 'react'
import { Box, Center, Heading, Input, Button, FormControl, FormLabel, Grid, GridItem } from '@chakra-ui/react'
import useLoginSignup from './useLoginSignup'


function LoginSignUp({ isLogin }) {

    const { setInfo, submit } = useLoginSignup(isLogin)

    return (
        <Center h={window.innerHeight}>
        <form onSubmit={(e) => submit(e)}>
            <Box bg='whiteAlpha.100' p={3} borderRadius={6} >

                <Heading my={2}>
                    {
                        isLogin
                        ? 'Log In'
                        : 'Sign Up'
                    }
                </Heading>

                {/* First Name and Last Name fields */}
                {
                    isLogin
                    ? null
                    :<Grid templateColumns="repeat(4, 1fr)" gap={1} >
                        <GridItem colSpan={2}>
                            <Field label='First Name' placeholder='First Name' onChange={(e) => setInfo({'attribute':'first_name', 'value': e.target.value})}/>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Field label='Last Name' placeholder='Last Name' onChange={(e) => setInfo({'attribute':'last_name', 'value': e.target.value})}/>    
                        </GridItem>
                    </Grid>
                }
                
                <Field label='Email' placeholder='Email' onChange={(e) => setInfo({'attribute':'email', 'value': e.target.value})}/>
                <Field label='Password' placeholder='Password' type='password' onChange={(e) => setInfo({'attribute':'password1', 'value': e.target.value})}/>
                
                {
                    isLogin
                    ? null
                    : <Field label='Password confirmation' placeholder='Confirm Password' type='password' onChange={(e) => setInfo({'attribute':'password2', 'value': e.target.value})}/>
                }
                
                <Button type='submit'>
                    {
                        isLogin
                        ? 'Log In'
                        : 'Sign Up'
                    }
                </Button>

            </Box>
        </form>
        </Center>
    )
}

export default LoginSignUp

const Field = ({ label, placeholder, ...Children }) => {
    return(
        <FormControl isRequired my={2} >
            <FormLabel my={0}>{label}</FormLabel>
            <Input placeholder={placeholder} {...Children} />
        </FormControl>
    )
}
