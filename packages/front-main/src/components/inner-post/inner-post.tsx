// import styles from './posts.module.scss'
import { get } from '../../security/api/get'
import routes from '../../security/routes'
import { ApiResponse } from '../../app/models/index'


export default async function InnerPost(props: {id: string | number}) {
    let response: ApiResponse = {} as ApiResponse
    try {
        if (!props.id ) {
            return 
        }
        const res = await get(routes.inner_post.path, {
            key: 'id',
            value: props.id
        })
        response = await res.json()
        console.log(response)
    } catch (err) {
          console.log('failed to fecth data')
    }

  return (
    <main>
        {response.res === 'OK' && <div dangerouslySetInnerHTML={{ __html: response.data[0].content}} /> || <div>An error occured</div>}
    </main>
  )
}
