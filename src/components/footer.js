import React from 'react'
import Copyr from './icons/copyr'

const Footer = () => {
    return (
        <div className='bg-black w-full ' >
            <div className='flex flex-col items-center gap-[1rem] pb-[2rem] border-b-2 border-white'>
                <img src='/images/footerlogo.png' height={"100%"} />
                <p className='text-white text-[20px]'>Dessert.Bar.Kitchen</p>
                <p className='text-[14px] text-white font-light'>+040 2355 7261</p>
                <p className='text-[14px] text-white font-light'>savory@qodeinteractive.com</p>
                <p className='text-[14px] text-white font-light'>Plot No.8-2, 293/82/A/161, Rd Number 13, Jubilee Hills, Hyderabad, Telangana 500033</p>
            </div>
            <div className='flex justify-center gap-2 py-[1rem]' >
                <Copyr />
                <p className='text-[14px] text-white font-light'>TECHARION 2023</p>
            </div>
        </div>
    )
}

export default Footer
