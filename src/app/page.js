import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-9/12 h-[80vh] bg-white shadow-lg rounded-2xl flex items-center justify-around'>
      <div className=''>
        <Image className='mt-[-10rem] ml-[-5rem] mb-20' src="/logo.svg" alt="me" width="50" height="50" />
        <h1 className='text-3xl font-bold mb-5'>Welcome to <br /> DiGiLABS</h1>
        <form>
          <div className="w-full mb-5 flex">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-l-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0858F7]" id="inline-full-name" type="text" value="Jane Doe" />
            <div className='relative block appearance-none bg-gray-200 border border-gray-200 text-gray-700 pr-8 rounded-r-lg leading-tight focus:outline-none focus:bg-white focus:border-[#0858F7]'>
              <select class="py-3 px-4 rounded-lg focus:outline-none focus:bg-white focus:border-[#0858F7] border-0" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
            </div>
          </div>
          <div className="w-full mb-5">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0858F7]" id="inline-password" type="password" placeholder="******************" />
          </div>
          <div className="w-full mb-5">
            <button className="shadow bg-[#0858F7] hover:bg-[#0858F1] focus:shadow-outline focus:outline-none w-full text-white font-bold py-3 px-4 rounded-lg" type="button">
              Next
            </button>
          </div>
        </form>
        <p className='text-center text-[#0858F7] font-bold'>Forgot your password?</p>
        <p className='text-sm mb-[-10rem] ml-[-5rem] mt-20'>Not member? <span className='text-[#0858F7]'>Create account</span></p>
      </div>
      <div>
        <Image src="/auth.svg" alt="me" width="500" height="500" />
      </div>
    </div>
  )
}
