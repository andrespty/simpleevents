import React from 'react'
import { Input, Box, Button } from '@chakra-ui/react'
import useCreateEvent from './useCreateEvent'
import DatePickerForm from '../../components/Date_Picker/DatePickerForm'

function CreateEventForm() {

    const { info, setInfo } = useCreateEvent()

    return (
        <Box>
            <Input placeholder='Event Name' onChange={(e) => setInfo({name: e.target.valu})} />
            <Input placeholder='Poster' type='file' onChange={(e) => setInfo({poster: e.target.files[0]})} />

            <DatePickerForm 
                onChange={date => setInfo({date:date})} 
                selected={info.date} 
                dateFormat='MMMM d, yyyy' 
            />
            <DatePickerForm 
                onChange={date => setInfo({date:date})} 
                selected={info.date} 
                showTimeSelect
                showTimeSelectOnly
                dateFormat='h:mm aa'
                timeIntervals={30}
            />
        
            <Button onClick={()=>console.log(info)}>Info</Button>
        </Box>
    )
}

export default CreateEventForm
