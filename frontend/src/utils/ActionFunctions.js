import { url } from "../App"
import axios from 'axios';

export async function create_and_update_tickets(body){
    console.log(body)
    const response = await axios.put(`${url}/api/models/ticket/`, body, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })

    return await response.data
}

export async function delete_tickets(pk_list){
    console.log(pk_list)
    let delete_pks = pk_list.join()
    const response = await axios.delete(`${url}/api/models/ticket/?pks=${delete_pks}`)

    return await response.data
}