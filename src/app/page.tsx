"use client";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube
} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import consulting from '../../public/consulting.png'
import code from '../../public/code.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    // Any code here will only run on the client-side
    // You can safely use useState and other client-side features here
  }, []);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className="min-h-screen">
          <nav className="flex py-10 mb-12 justify-between items-center">
            <h1 className='text-xl font-burtons'>Nikola Tesla</h1>
            <ul className='flex items-center'>
              <li className='text-xl'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='dark:text-white'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500  text-2xl cursor-pointer px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='p-10 text-center '>
            <h2 className='text-5xl text-teal-600 font-medium md:text-6xl '>Nikola Tesla</h2>
            <h3 className='text-2xl py-2 md:text-3xl '> Inventor, electrical engineer, mechanical engineer, and futurist</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>I am Nikolas Tesla, originally from Croatia based in USA.
              Best known for my contributions to the design of the modern alternating current electricity supply system
            </p>
          </div>

          <div className='flex text-5xl justify-center text-gray-600 gap-16'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          <div className='w-80 h-80 overflow-hidden relative bg-gradient-to-b from-teal-500 rounded-full mx-auto mt-20 md:h-96 md:w-96'>
            <Image src={deved} objectFit='cover' layout='fill' alt={'deved'} />
          </div>
        </section>

        <section className='mt-5'>
          <div >
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-500 dark:text-white'>
              Since my childhood I was very curious. Gifted with editic memory which help me remember and imagine everything without any implementation in my mind to check for possible outcome of the invention.
              I am the inventor of AC, Radio waves, AC Engine in Cars, Neon light and many more.I envisoned to supply free electricity to the whole world throught atmosphere for free. Through out my life I had many patents and made me rich. But to help willington I gave up royalites or else I would be the world first billionaire.
            </p>
            <p className='text-md py-2 leading-8 text-gray-500 dark:text-white'>
              I can help your business to grow. I bring state of art innovations in electronic devices and help you introduce new technology to the world.
              Together we build a world where our innovations will makes life of people easier and world a better place.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={design} alt={'design'} width={100} height={100} />
              <h3 className='text-lg font-medium pb-2 pt-8'>State of Art Innovations</h3>
              <p>Will help to devlop futuristic machines according to your needs.</p>
              <h4 className=' py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Brain pure imagination</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white '>
              <Image className='mx-auto' src={consulting} alt={'design'} width={100} height={100} />
              <h3 className='text-lg font-medium pb-2 pt-8'>State of Art Innovations</h3>
              <p>Will help to devlop futuristic machines according to your needs.</p>
              <h4 className=' py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Brain pure imagination</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={code} alt={'design'} width={100} height={100} />
              <h3 className='text-lg font-medium pb-2 pt-8'>State of Art Innovations</h3>
              <p>Will help to devlop futuristic machines according to your needs.</p>
              <h4 className=' py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Brain pure imagination</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-500 dark:text-white'>
              Since my childhood I was very curious. Gifted with editic memory which help me remember and imagine everything without any implementation in my mind to check for possible outcome of the invention.
              I am the inventor of AC, Radio waves, AC Engine in Cars, Neon light and many more.I envisoned to supply free electricity to the whole world throught atmosphere for free. Through out my life I had many patents and made me rich. But to help willington I gave up royalites or else I would be the world first billionaire.
            </p>
            <p className='text-md py-2 leading-8 text-gray-500 dark:text-white'>
              I can help your business to grow. I bring state of art innovations in electronic devices and help you introduce new technology to the world.
              Together we build a world where our innovations will makes life of people easier and world a better place.
            </p>
            <div className='flex flex-col gap-10  py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} alt={'web1'} className='rounded-lg object-cover' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web2} alt={'web2'} className='rounded-lg object-cover' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web3} alt={'web3'} className='rounded-lg object-cover' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web4} alt={'web4'} className='rounded-lg object-cover' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web5} alt={'web5'} className='rounded-lg object-cover' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web6} alt={'web6'} className='rounded-lg object-cover' />
              </div>
            </div>

          </div>
        </section>


      </main>
    </div>
  )
}
