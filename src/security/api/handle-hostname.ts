import { Params } from "../types/params"

const mapRedirection: { [Key: string]: string } = {
    development: 'http://localhost:3100',
    integration: 'https://',
    staging: 'https://',
    production: 'https://',
}

const env = process.env.ENV || 'development'

export const handleHostname = (path: string, params?: Params): string => {
    if (params) {
        return `${mapRedirection[env]}${path}?${params.key}=${params.value}`
    }

    return `${mapRedirection[env]}${path}`
}