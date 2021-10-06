import { url } from "../App";

export async function get_events(){
    const response = await fetch(`${url}/api/filterEvents/`)

    return await response.json()
}