import React from 'react'

export default function Button({name,onClickFunction}) {
    return (
        <>
            <button 
            className='w-full text-white bg-gray-800 hover:bg-gray-900 py-2 rounded-lg text-sm font-bold' 
            onClick={onClickFunction}>
                {name}
            </button>
        </>
    )
}
