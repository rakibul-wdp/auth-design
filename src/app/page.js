import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <div></div>
      <div>
        <Image src="/auth.svg" alt="me" width="500" height="500" />
      </div>
    </div>
  )
}
