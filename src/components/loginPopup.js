import React from 'react'
import Cross from './icons/cross'
import LogoShort from './icons/logoshort'

const LoginPopUp = ({ closePopup }) => {
    return (
        <div className='bg-login-popup w-max h-max p-[2rem] rounded-2xl bg-cover flex flex-col items-end absolute top-16 z-50  ' >
            <button onClick={closePopup} >
                <Cross />
            </button>
            <div className='px-[2rem] py-[4rem]' >
                <div className='bg-white p-[2rem] w-max rounded-xl flex flex-col items-center gap-5 ' >
                    <LogoShort />
                    <div className='flex flex-col gap-5'>
                        <p className='text-[18px] font-medium' >Welcome to Techarion</p>
                        <p className='text-[#6E6B7B] text-[16px] font-light' >Please sign-in to your account and start the adventure</p>
                        <div>
                            <p className='text-[#6E6B7B] text-[16px] font-light'>Phone number</p>
                            <div className='flex w-[100%]' >
                                <input className='border-[1px] rounded-l-lg w-[74%] p-[0.5rem] border-[#B9B9C3]' />
                                <button className='bg-[#1D4109] text-white  px-[1rem] py-[0.5rem] rounded-r-lg' >GET OTP</button>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#6E6B7B] text-[16px] font-light'>OTP</p>
                            <div className='flex w-[100%]' >
                                <input placeholder='****' className='border-[1px] rounded-lg w-full p-[0.5rem] border-[#B9B9C3]' />
                            </div>
                        </div>
                        <button className='bg-[#1D4109] text-white w-full py-[0.5rem] rounded-lg' >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPopUp
