import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todosAtom } from '../stores/atom'

export default function Advance() {
    return (
        <>
            <RecoilRoot>
                <Todo id={2}/>
                <Todo id={1}/>
                <Todo id={3}/>
                <Todo id={4}/>
                <Todo id={5}/>
            </RecoilRoot>
        </>
    )
}

function Todo({id}){
    const todo = useRecoilValue(todosAtom(id))
    return (
        <>
            <div>
                <h2>
                    {todo.title}
                </h2>
                <h4>
                    {todo.description}
                </h4>
            </div>
        </>
    )
}
