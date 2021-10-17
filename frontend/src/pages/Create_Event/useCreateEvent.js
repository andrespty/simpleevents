import { useReducer } from "react"
import { join_date_time } from "../../utils/UtilitiesFunctions"
import { create_event } from "../../utils/CreateFunctions"

const useCreateEvent = () => {
    const [ info, setInfo ] = useReducer(reducer, initialInfo)

    
    const submit = (e) => {
        e.preventDefault()
        setInfo({isLoading:true})
        let date = join_date_time(info.date, info.time)
        let form_data = new FormData()

        console.log(info)

        // form_data.append('creator', 1)
        // form_data.append('name', info.name)
        // form_data.append('date', date)
        // form_data.append('poster', info.poster)
        
        // create_event(form_data)
        // .then( json =>{
            //     setInfo({isLoading:false})
            //     console.log(json)
            // })
        setInfo({isLoading:false})
    }

    return { info, setInfo, submit }
}

export default useCreateEvent

const initialInfo = {
    name:'',
    poster:'',
    date: new Date(),
    time: new Date(),
    isLoading: false,
    hasEndDate: false
}

const reducer = (state, action) => {
    return {
        ...state,
        ...action
    }
}