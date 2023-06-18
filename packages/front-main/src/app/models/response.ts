import { Post } from './post'

export interface ApiResponse {
    res: string,
    data: Post[],
}