import React from 'react'

const SecondSec = () => {
    return (
        <div className='flex items-top bg-table bg-no-repeat bg-left bg-auto'>
            {/* <img src='/images/table.png' alt='table' /> */}
            <div>
                <div className='px-[6rem] pt-[6rem] flex gap-2 items-start'>
                    <img src='/images/Quote.png' alt='quote ' />
                    <p className=' text-[#737373] text-[28px] w-[80%] '>
                        Experience culinary excellence at our restaurant. Book your table today and get ready to indulge in a delightful dining experience!!
                    </p>
                </div>
            </div>
            <img src='/images/chair.png' alt='chair' className='pt-[4rem]' />
        </div>
    )
}

export default SecondSec
