import { url } from "../App"
import axios from 'axios';

export async function create_event(body){
    console.log(body)
    const response = await axios.post(`${url}/api/models/event/`, body, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })

    return await response.data
}

export async function create_ticket(body){
    const response = await axios.post(`${url}/api/models/ticket/`, body, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })

    return await response.data
}