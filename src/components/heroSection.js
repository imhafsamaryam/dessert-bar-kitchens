import React, { useEffect, useState } from 'react'
import Button from './button'

const HeroSection = () => {

    const [imgSrc, setImgSrc] = useState('/images/bg1.png')

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Get a random integer between 1 and 3 to choose a random background image
            const randomNum = Math.floor(Math.random() * 3) + 1;
            setImgSrc(`/images/bg${randomNum}.png`);
        }, 2000);

        return () => clearInterval(intervalId); // cleanup function to clear the interval
    }, []); // empty dependency array to only run this effect once


    return (
        <div>
            <div className=''>
                <img src={imgSrc} alt='background' className='transition-opacity' width={"100%"} />
            </div>
            <div className='flex flex-col gap-[0.5rem] absolute top-[40vh] left-[60vw] '>
                <h2 className='text-[48px] text-white font-gabriela ' >Dessert | Bar | Kitchen</h2>
                <p className='text-white text-[24px] w-[70%]'>The Barn is a global food experience and our dessert bar is legendary!</p>
                <Button text={"Contact Us"} />
            </div>
        </div>
    )
}

export default HeroSection
