import React from 'react'

const Navbar = ({ loginOpen, loggedIn, setLoggedIn }) => {

    const logOut = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        setLoggedIn(false)
    }
    return (
        <div className="fixed top-0 w-[100%] pb-[2px] ">
            <img src='/images/navbar-bg.png' alt='background' width={"100%"} />
            <div className='absolute top-0 left-0 px-[5rem] py-[1.5rem] flex justify-between w-full items-center '>
                <div>
                    <ul className='flex justify-between w-[30vw]'>
                        {loggedIn ?
                            <li className='uppercase text-[20px] cursor-pointer' onClick={logOut} >Logout</li>
                            :
                            <li className='uppercase text-[20px] cursor-pointer' onClick={loginOpen} >login</li>
                        }

                        <li className='uppercase text-[20px]'>reservation</li>
                        <li className='uppercase text-[20px]'>private parties</li>
                    </ul>
                </div>
                {/* <div className='absolute left-[44%] top-0 p-2 z-[100]' >
                    <Logo />
                </div> */}
                <div>
                    <ul className='flex justify-between w-[30vw]'>
                        <li className='uppercase text-[20px]'>events</li>
                        <li className='uppercase text-[20px]'>contact us</li>
                        <li className='uppercase text-[20px]'>about us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
