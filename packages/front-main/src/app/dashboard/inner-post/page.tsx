"use client"

import Header from '../../../components/header/Header'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
const InnerPost = dynamic(() => import('../../../components/inner-post/inner-post'))


export default async function Home() {
    const searchParams = useSearchParams()
    const id = searchParams.get('search') || 0

  return (
    <main>
    <Header message={`Your amazing posts-id is ${ id }`} />
    <InnerPost id={id}></InnerPost>
    </main>
  )
}