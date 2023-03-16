import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-9/12 h-[80vh] bg-gray-500 shadow-lg flex items-center justify-around'>
      <div>
        <Image src="/logo.svg" alt="me" width="50" height="50" />
        <h1>Welcome to <br /> DiGiLABS</h1>
        <form>
          <input type="text" name="username" id="" />
          <input type="password" name="password" id="" />
          <input type="submit" value="Next" />
        </form>
        <p>Forgot your password?</p>
        <p>Not member? <span>Create account</span></p>
      </div>
      <div>
        <Image src="/auth.svg" alt="me" width="500" height="500" />
      </div>
    </div>
  )
}
