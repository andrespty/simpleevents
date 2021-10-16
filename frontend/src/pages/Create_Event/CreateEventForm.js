import React from 'react'
import { Input, Box, Button } from '@chakra-ui/react'
import useCreateEvent from './useCreateEvent'
import DatePickerForm from '../../components/Date_Picker/DatePickerForm'

function CreateEventForm() {

    const { info, setInfo, submit } = useCreateEvent()

    return (
        <Box>
            <form onSubmit={submit}>
            <Input placeholder='Event Name' onChange={(e) => setInfo({name: e.target.value})} />
        
            <Input placeholder='Poster' type='file' onChange={(e) => setInfo({poster: e.target.files[0]})} />

            <DatePickerForm 
                onChange={date => setInfo({date:date})} 
                selected={info.date} 
                dateFormat='MMMM d, yyyy' 
            />
            <DatePickerForm 
                onChange={time => setInfo({time:time})} 
                selected={info.time} 
                showTimeSelect
                showTimeSelectOnly
                dateFormat='h:mm aa'
                timeIntervals={30}
            />
        
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
