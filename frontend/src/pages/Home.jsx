import React from 'react';
import { Link } from 'react-router-dom';
import framesImg from '../assets/frame-outline-1-min.webp'
import clockImg from '../assets/wall-clock-1-min-1.webp'
import acrylicPhoto from '../assets/1-Landscape-Acrylic-Wall-Photo-1.webp'
import clearImg from '../assets/actylic-clear-frame-1-min.webp'
import hero from '../assets/hero.jpg'


export default function Home() {
    return (
        <div className='grid justify-items-center'>
            <div 
            className="relative hero min-h-[80vh] w-full flex flex-col justify-center items-center gap-6 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})` }}
            >
            <div className="absolute inset-0 bg-gray-400/30"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold text-black">Welcome to OMG Poster</h1>
                <p className="text-black text-2xl w-[80%] p-5 mx-auto">
                OMGS aims to spark joy and excitement in every shopping experience. OMGS is a retail
                company that specializes in offering a diverse range of unique and captivating products
                with a “wow factor.”
                </p>
            </div>
            </div>

            <div className='services '>
                <h1 className='flex justify-center items-center p-4 text-4xl text-gray-300  bg-gray-800'>
                    Our Services
                </h1>
                <div className='grid grid-cols-2 bg-gray-400 h-[90vh]'>
                    <div className='flex flex-col justify-center items-center m-5 gap-4'>
                        <h1 className='text-3xl font-bold'>OMGS® ACRYLIC PHOTO</h1>
                        <p>Experience the brilliance and vibrancy of our acrylic prints, expertly crafted to bring your images to life. Create a captivating visual display that truly reflects your style and creates a lasting impression.</p>
                        <Link to='/' className='button'>SHOP NOW</Link>
                    </div>
                    <div>
                        <img src={acrylicPhoto} alt='Clock Image' className='h-[85%] w-full mt-6' />
                    </div>
                </div>
                <div className='grid grid-cols-2 bg-gray-800 h-[90vh]'>
                    <div>
                        <img src={framesImg} alt='Frames Image' className='h-[85%] w-full m-2 mt-6' />
                    </div>
                    <div className='flex flex-col justify-center items-center m-5 gap-4 text-gray-400'>
                        <h1 className='text-3xl font-bold'>OMGS® Framed Acrylic Photo</h1>
                        <p>Personalize your décor with the OMGS® Framed Acrylic Photo, expertly crafted to highlight your favorite memories with elegance and clarity.</p>
                        <Link to='/' className='button'>SHOP NOW</Link>
                    </div>
                </div>
                <div className='grid grid-cols-2 bg-gray-400 h-[90vh]'>
                    <div className='flex flex-col justify-center items-center m-5 gap-4'>
                        <h1 className='text-3xl font-bold'>OMGS® Acrylic Wall Clock</h1>
                        <p>Experience timeless elegance with the OMGS® Acrylic Clock, where your personalized photo transforms a simple timepiece into a captivating decor statement.</p>
                        <Link to='/' className='button'>SHOP NOW</Link>
                    </div>
                    <div>
                        <img src={clockImg} alt='Clock Image' className='h-[85%] w-full mt-6' />
                    </div>
                </div>
                <div className='grid grid-cols-2 bg-gray-800 h-[90vh]'>
                    <div>
                        <img src={clearImg} alt='Frames Image' className='h-[85%] w-full m-2 mt-6' />
                    </div>
                    <div className='flex flex-col justify-center items-center m-5 gap-4 text-gray-400'>
                        <h1 className='text-3xl font-bold'>OMGS® Clear Acrylic Photo</h1>
                        <p>Showcase your loved ones in a striking way with the OMGS® Clear Acrylic Photo, featuring a personalized, people-only design where the background is removed, allowing your wall to seamlessly integrate through the transparent areas.</p>
                        <Link to='/' className='button'>SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}