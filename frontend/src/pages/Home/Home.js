import React, { useEffect, useState } from 'react'
import EventCard from '../../components/Cards/EventCard'
import { get_events } from '../../utils/FetchFunctions'


function Home() {

    const [ info, setInfo ] = useState()
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        console.log('Hello')
        get_events()
        .then(json => {
            setInfo(json)
            setIsLoading(false)
        })
    },[])

    return (
        <div>
            Home
            {
                isLoading
                ? null
                :<EventCard info={info[0]} />
            }
            
        </div>
    )
}

export default Home
