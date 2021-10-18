import { url } from "../App";
import axios from "axios";

export async function get_events(){
    const response = await fetch(`${url}/api/filterEvents/`)

    return await response.json()
}

export async function check_token(){
    const response = await fetch(`${url}/api/token/refresh/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh: localStorage.getItem('refresh')
        })
    })

    // if successfull:
    //     {
    //         "access": access token
    //     }
    // else:
    //     {
    //         "detail": "Token is invalid or expired",
    //         "code": "token_not_valid"
    //     }

    return await response.json()
}

export async function get_event(eventID){
    const response = axios.get(`${url}/api/event/${eventID}/`)

    return await response
}