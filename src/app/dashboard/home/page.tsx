import Image from 'next/image'
import styles from './home.module.scss'
import { get } from '@security/api/get'
import routes from '@security/routes'
import Header from '@components/header/Header'


interface HpData {
  res: string,
  data: {
    headline: string,
    subtitle: string
  },
  error?: any
}

export default async function Home(hpData: HpData) {
  try {
  const res = await get(routes.index.path)
  hpData = await res.json()
  } catch (err) {
    console.log('Failed to fetch data')
  }
  
  return (
    <main>
      <Header message="Welcome to our amazing app !" />
      <div className={styles.main}>
        <Image 
          src="/post.jpeg" 
          width={230}
          height={230}
          alt="Post image"
          className={styles.image}
          />
        <div className={styles.welcomeElt}>
          {hpData.res === 'OK' && <div dangerouslySetInnerHTML={{ __html: hpData.data.headline}} /> || <div>An error occured</div>}
          {hpData.res === 'OK' && <div dangerouslySetInnerHTML={{ __html: hpData.data.subtitle}} /> || <div>An error occured</div>}
        </div>
      </div>
    </main>
  )
}
