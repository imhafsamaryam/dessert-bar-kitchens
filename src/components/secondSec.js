import React from 'react'

const SecondSec = () => {
    return (
        <div className='flex'>
            <div>
                <div className='px-[5rem] py-[4rem] flex gap-2 items-start'>
                    <img src='/images/Quote.png'  alt='quote '/>
                    <p className=' text-[#737373] text-[28px] w-[70%]'>
                        Experience culinary excellence at our restaurant. Book your table today and get ready to indulge in a delightful dining experience!!
                    </p>
                </div>
                <img src='/images/table.png'  alt='table'/>
            </div>
            <img src='/images/chair.png' alt='chair' className='py-[4rem]' />
        </div>
    )
}

export default SecondSec
