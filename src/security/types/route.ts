import { METHOD } from './methods'

export interface Route<TParamsType, TUrlParamsType> {
    path: string,
    method?: METHOD,
    params?: TParamsType,
    urlParams?: TUrlParamsType,
}