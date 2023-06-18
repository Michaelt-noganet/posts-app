import { Params } from '../types/params'
import { handleHostname } from './handle-hostname'

export const get = async (path: string, params?: Params): Promise<any> => {
    try {
        const response = await fetch(handleHostname(path, params), 
        {
            method: 'GET',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }
    )

        return response

    } catch (error) {
        return `Failed to load data: ${ JSON.stringify(error) }`
    }
}