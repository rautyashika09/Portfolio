import { HERO_CONTENT } from '../costants';
import React from 'react'

const Home = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col item-center lg:item-start">
                <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                  Yashika Raut
                  </h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                  FrontEnd Developer
                </span>
                <p className="my-2 max-w-xl font-light tracking-tighter">
                  {HERO_CONTENT}
                </p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <img src="../src/assets/image.jpg" alt="profile" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home