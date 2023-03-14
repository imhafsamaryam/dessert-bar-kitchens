import React, { useEffect, useState } from 'react'
import Button from './button'

const HeroSection = () => {

    const bgImages = [
        '/images/bg1.png',
        '/images/bg2.png',
        '/images/bg3.png',
        '/images/bg1.png',
        '/images/bg2.png',
        '/images/bg3.png',

    ]

    const [imgSrc, setImgSrc] = useState('/images/bg1.png')

    useEffect(() => {
        setInterval(
            () => {
                bgImages.map((image) => {
                    setImgSrc(image)
                })
            }, 1000
        )
    },bgImages)

    return (
        <div>
            <div className=''>
                <img src={imgSrc} width={"100%"} />
            </div>
            <div className='flex flex-col gap-[0.5rem] absolute top-[40vh] left-[60vw] '>
                <h2 className='text-[48px] text-white' >Dessert | Bar | Kitchen</h2>
                <p className='text-white text-[24px] w-[70%]'>The Barn is a global food experience and our dessert bar is legendary!</p>
                <Button text={"Contact Us"} />
            </div>
        </div>
    )
}

export default HeroSection
