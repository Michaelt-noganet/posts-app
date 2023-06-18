import Image from 'next/image'

import Layout from './dashboard/layout'

export default async function Home() {
  
  return (
    <main>
      <Layout>{}</Layout>
      <Image 
        src="/post.jpeg" 
        width={230}
        height={230}
        alt="Post image"
        />
    </main>
  )
}
