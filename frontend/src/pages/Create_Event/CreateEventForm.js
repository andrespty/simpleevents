import React from 'react'
import { Input, Box, Button, FormControl, FormLabel, Stack, Checkbox, Collapse } from '@chakra-ui/react'
import useCreateEvent from './useCreateEvent'
import DatePickerForm from '../../components/Date_Picker/DatePickerForm'

function CreateEventForm() {

    const { info, setInfo, submit } = useCreateEvent()

    return (
        <Box p={5}>
            <form onSubmit={submit}>

                <Field label='Event Name' isRequired={true}>
                    <Input placeholder='Event Name' onChange={(e) => setInfo({name: e.target.value})} />
                </Field>

                <Stack direction='row' w='100%' align='center'  >
                    <Field label='Start Date' isRequired={true}>
                        <DatePickerForm 
                            onChange={date => setInfo({date:date})} 
                            selected={info.date} 
                            dateFormat='MMMM d, yyyy' 
                        />
                    </Field>

                    <Field label='Start Time' isRequired={true}>
                        <DatePickerForm 
                            onChange={time => setInfo({time:time})} 
                            selected={info.time} 
                            showTimeSelect
                            showTimeSelectOnly
                            dateFormat='h:mm aa'
                            timeIntervals={30}
                        />
                    </Field>
                </Stack>
                    
                <Checkbox 
                    onChange={(e) => setInfo({hasEndDate: e.target.checked})}
                    isChecked={info.hasEndDate}
                    colorScheme='primary'
                >
                    Add end date
                </Checkbox>

                <Collapse in={info.hasEndDate}>
                    <Stack direction='row' w='100%' align='center' >
                        <Field label='End Date' isRequired={true}>
                            <DatePickerForm 
                                onChange={date => setInfo({date:date})} 
                                selected={info.date} 
                                dateFormat='MMMM d, yyyy' 
                            />
                        </Field>

                        <Field label='End Time' isRequired={true}>
                            <DatePickerForm 
                                onChange={time => setInfo({time:time})} 
                                selected={info.time} 
                                showTimeSelect
                                showTimeSelectOnly
                                dateFormat='h:mm aa'
                                timeIntervals={30}
                            />
                        </Field>
                    </Stack>
                </Collapse>

                <Field label='Poster' >
                    <Input placeholder='Poster' type='file' onChange={(e) => setInfo({poster: e.target.files[0]})} />
                </Field>
                <Button 
                    colorScheme='primary' 
                    isLoading={info.isLoading}
                    type='submit'
                >
                    Create Event
                </Button>

            </form>
        </Box>
    )
}

export default CreateEventForm

const Field = ({ label, placeholder, error, isInvalid, children, isRequired, ...props }) => {
    return(
        <FormControl isRequired={isRequired} my={2} isInvalid={isInvalid}>
            <FormLabel my={0}>{label}</FormLabel>
            {children}
        </FormControl>
    )
}