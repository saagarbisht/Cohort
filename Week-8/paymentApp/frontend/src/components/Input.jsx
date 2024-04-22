import React from 'react'

export default function Input({type,label,id,placeholder,onChangeFunction,inputValue}) {
    return (
        <>
            <div className='w-full flex flex-col items-start gap-2'>
                <label htmlFor={id} className='text-sm font-semibold'>{label}</label>
                <input type={type} id={id} placeholder={placeholder} className='w-full border rounded px-2 py-1' onChange={onChangeFunction} value={inputValue}/>
            </div>
        </>
    )
}
