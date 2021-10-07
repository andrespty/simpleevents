import React, {memo} from 'react'
import { Box, Center, Heading, Input, Button, FormControl, FormLabel, Grid, GridItem, FormErrorMessage, Collapse, 
    Alert, AlertDescription, AlertIcon, Flex, Spacer, Text, Link } from '@chakra-ui/react'
import useLoginSignup from './useLoginSignup'


function LoginSignUp({ isLogin }) {

    const { setInfo, submit, loading, error } = useLoginSignup(isLogin)

    return (
        <Center h={window.innerHeight - 100}>
        <Box w={{base:'90%', sm:'70%', md:'50%', lg:'40%'}} minH={'40%'} p={3} borderRadius={6} >
            <Flex direction='column'>
                
                <Heading my={2} textColor='secondary.900'>
                    {
                        isLogin
                        ? 'Log In'
                        : 'Sign Up'
                    }
                </Heading>

                <form onSubmit={(e) => submit(e)} bg='green.400' height='100%' id='login-signup'>
                {
                    // Alert error when logging in
                    isLogin
                    ?<Collapse in={error.detail === '' ? false : true}>
                        <Alert status='error'>
                            <AlertIcon/>
                            <AlertDescription>{error.detail}</AlertDescription>
                        </Alert>
                    </Collapse>
                    : null
                }

                {/* First Name and Last Name fields */}
                {
                    isLogin
                    ? null
                    :<Grid templateColumns="repeat(4, 1fr)" gap={1} >
                        <GridItem colSpan={2}>
                            <Field 
                                label='First Name' 
                                placeholder='First Name' 
                                error={error.first_name}
                                onChange={(e) => setInfo({'attribute':'first_name', 'value': e.target.value})}
                                isInvalid={error.first_name === '' ? false : true}
                            />
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Field 
                                label='Last Name' 
                                placeholder='Last Name' 
                                error={error.last_name}
                                onChange={(e) => setInfo({'attribute':'last_name', 'value': e.target.value})}
                                isInvalid={error.last_name === '' ? false : true} 
                            />    
                        </GridItem>
                    </Grid>
                }
                
                <Field 
                    label='Email' 
                    placeholder='Email'
                    error={error.email} 
                    onChange={(e) => setInfo({'attribute':'email', 'value': e.target.value})}
                    isInvalid={error.email === '' ? false : true}
                />
                <Field 
                    label='Password' 
                    placeholder='Password' 
                    type='password' 
                    error={error.password}
                    onChange={(e) => setInfo({'attribute':'password', 'value': e.target.value})}
                    isInvalid={error.password === '' ? false : true}
                />
                
                {
                    isLogin
                    ? null
                    : <Field 
                        label='Password confirmation' 
                        placeholder='Confirm Password' 
                        type='password' 
                        onChange={(e) => setInfo({'attribute':'password2', 'value': e.target.value})}
                        error={error.password2}
                        isInvalid={error.password2 === '' ? false : true}
                    />
                }
                </form>
                
                <Spacer />
                
                <Button type='submit' isLoading={loading} form='login-signup' mt={6} colorScheme='primary' >
                    {
                        isLogin
                        ? 'Log In'
                        : 'Sign Up'
                    }
                </Button>

                <HasAccount isLogin={isLogin} />

            </Flex>
            
        </Box>
        </Center>
    )
}

export default LoginSignUp

const HasAccount = memo(({isLogin}) => {
    if (isLogin){
        console.log(isLogin)
        return(
            <Text align='center' fontSize='sm' lineHeight={1.2} mt={2}>
                Don't have an account? <br/>
                <Link href={'/signup'}>
                    Create on here!
                </Link>
            </Text>
        )
    }
    else{
        return(
            <Text align='center' fontSize='sm' lineHeight={1.2} mt={2}>
                Already have an account? <br/>
                <Link href={'/login'}>
                    Log In here!
                </Link>
            </Text>
        )
    }
})


const Field = ({ label, placeholder, error, isInvalid, ...Children }) => {
    return(
        <FormControl isRequired my={2} isInvalid={isInvalid}>
            <FormLabel my={0}>{label}</FormLabel>
            <Input placeholder={placeholder} {...Children} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    )
}
