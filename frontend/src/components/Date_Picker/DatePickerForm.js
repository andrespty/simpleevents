import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input, Box } from '@chakra-ui/react';
import './DatePicker.css'
function DatePickerForm({...props}) {

    const minDate = new Date()

    return (
        <Box>
            <DatePicker 
                {...props} 
                minDate={minDate}  
                customInput={<Input />} 
                calendarClassName='calendar'
                className='date'
                showPopperArrow={false}
            />     
        </Box>
    )
}

export default DatePickerForm
