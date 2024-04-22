import React from 'react'

export default function Navbar({userName}) {
    return (
        <>
            <nav className='shadow py-4 flex justify-between items-center'>
                <div className='text-3xl font-semibold tracking-wide ml-6'>Paytm</div>
                <div className='flex justify-between items-center mr-6'>
                    <div className='text-lg mr-10'>Hello {userName ? userName : "User"} !</div>
                    <div className='shadow-md w-10 h-10 bg-gray-200 grid place-content-center rounded-full'>{userName ? userName[0].toUpperCase() : "U"}</div>
                </div>
            </nav>
        </>
    )
}
