import styles from './posts.module.scss'
import { get } from '../../../security/api/get'
import routes from '../../../security/routes'
import Header from '../../../components/header/Header'
import Link from 'next/link'
import { Post } from '../../models/index'


export default async function Home(posts: Post[]) {
  try {
  const res = await get(routes.posts.path)
  posts = await res.json()
  } catch (err) {
    console.log('failed to fecth data')
  }
  return (
    <main>
    <Header message={`${posts.length} Posts are waiting for you !`} />
      <ul className={styles.listGroup}>
        {posts !== undefined && posts.map((post) => (
          <li 
            className={styles.listItem}
            key={post.id}>
              <Link href={{
                pathname: '/dashboard/inner-post',
                query: {
                  search: post.id
                }
                }}>{ post.title }</Link>
          </li>
        )) || <div>An error occured</div>}
      </ul>
    </main>
  )
}