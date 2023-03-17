"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility(event) {
    event.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className='w-9/12 h-[80vh] bg-white shadow-lg rounded-2xl flex items-center justify-around'>
      <div className=''>
        <div className='mt-[-3rem] mb-16 lg:ml-[-15rem] xl:ml-[-23rem] 2xl:ml-[-25rem] flex items-center justify-around'>
          <Image className='' src="/logo.svg" alt="me" width="50" height="50" />
          <p className='text-sm block sm:block md:block lg:hidden xl:hidden 2xl:hidden'>Not member? <span className='text-[#0858F7]'>Create account</span></p>
        </div>
        <h1 className='text-3xl w-3/4 m-auto font-bold mb-12'>Welcome to <br /> DiGiLABS</h1>
        <form className='w-3/4 m-auto'>
          <div className="w-full mb-5 flex">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-l-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0858F7]" id="inline-full-name" type="text" value="Jane Doe" />
            <div className='relative block appearance-none bg-gray-200 border border-gray-200 text-gray-700 pr-8 rounded-r-lg leading-tight focus:outline-none focus:bg-white focus:border-[#0858F7]'>
              <select className="py-3 px-4 rounded-lg bg-white focus:outline-none focus:bg-white focus:border-[#0858F7] border-0" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
            </div>
          </div>
          <div className="w-full relative mb-5">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#0858F7]" id="inline-password" type="password" placeholder="******************" />
            <button
              className="absolute inset-y-0 flex items-center justify-center ml-[15rem] sm:ml-[18rem] lg:ml-[15rem] xl:ml-[16rem] px-4 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="w-full mb-5">
            <button className="shadow bg-[#0858F7] hover:bg-[#0858F1] focus:shadow-outline focus:outline-none w-full text-white font-bold py-3 px-4 rounded-lg" type="button">
              Next
            </button>
          </div>
        </form>
        <p className='text-center text-[#0858F7] font-bold'>Forgot your password?</p>
        <p className='text-sm mb-[-10rem] lg:mb-[-3rem] ml-[-5rem] lg:ml-10 xl:ml-6 2xl:ml-2 mt-20 hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>Not member? <span className='text-[#0858F7]'>Create account</span></p>
      </div>
      <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
        <Image src="/auth.svg" alt="me" width="500" height="500" />
      </div>
    </div>
  )
}
