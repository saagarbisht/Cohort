import React from 'react'

export default function Heading({formHeading,formSubHeading}) {
    return (
        <>
            <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-2'>{formHeading}</h1>
                    <p className='text-slate-500'>{formSubHeading}</p>
            </div>
        </>
    )
}
