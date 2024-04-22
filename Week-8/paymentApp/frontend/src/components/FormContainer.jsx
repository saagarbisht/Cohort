import React from 'react'

export default function FormContainer({children}) {
    return (
        <>
            <div className='bg-slate-300 h-screen flex justify-center'>
                <div className='flex flex-col justify-center items-start'>
                    <div className='bg-white w-80 rounded-lg py-6 px-4 h-max shadow-md'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
