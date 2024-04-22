import React from 'react'

export default function Balance({balance}) {
    return (
        <>
            <div className='flex justify-start items-center px-6 py-6 gap-4'>
                <div className='text-lg font-bold'>Your Balance  </div>
                <div className='text-lg font-bold'>:</div>
                <div className='text-lg'>Rs. {balance}</div>
            </div>
        </>
    )
}
