import { METHOD } from "./types/methods"

const routes = {
    index: {
        path: '/index',
        method: METHOD.GET
    },
    posts: {
        path: '/posts',
        method: METHOD.GET
    },
    inner_post: {
        path: '/post/', //TODO: Impprove this logic
        method: METHOD.GET,
        params: {} as {
            id: number,
        }
    }
}

export default routes