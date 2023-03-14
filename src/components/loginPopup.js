import React from 'react'
import LogoShort from './icons/logoshort'

const LoginPopUp = ({ display }) => {
    return (
        <div style={{
            display: { display },
        }}   >
            <div>
                {/* <img src='/images/loginbg.png'  /> */}
                <div className='bg-white p-[2rem] w-max  flex flex-col items-center' >
                    <LogoShort />
                    <div>
                        <p className='text-[18px] font-medium' >Welcome to Techarion</p>
                        <p className='text-[14px] font-light' >Please sign-in to your account and start the adventure</p>
                        <button className='bg-[#1D4109] w-full ' >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPopUp
