import React, { useState } from 'react'
import Logo from './icons/logo'
import LoginPopUp from './loginPopup'



const Navbar = () => {

    const [loginPopup, setLoginPopUp] = useState("none")

    const handleLogin = () => {
        setLoginPopUp("block")
    }

    return (
        <div className="fixed top-0 w-[100%] pb-[2px] ">
            <img src='/images/navbar-bg.png' width={"100%"} />
            <div className='absolute top-0 left-0 px-[5rem] py-[1.5rem] flex justify-between w-full items-center '>
                <div>
                    <ul className='flex justify-between w-[30vw]'>
                        <li className='uppercase text-[20px]' > <button onClick={handleLogin} >login</button></li>
                        <li className='uppercase text-[20px]'>reservation</li>
                        <li className='uppercase text-[20px]'>private parties</li>
                    </ul>
                </div>
                <div className='absolute left-[45%] top-0 p-2 z-[100]' >
                    <Logo />
                </div>
                <div>
                    <ul className='flex justify-between w-[30vw]'>
                        <li className='uppercase text-[20px]'>events</li>
                        <li className='uppercase text-[20px]'>contact us</li>
                        <li className='uppercase text-[20px]'>about us</li>
                    </ul>
                </div>
            </div>
            <div >
                <LoginPopUp display={loginPopup} />
            </div>
        </div>
    )
}

export default Navbar
