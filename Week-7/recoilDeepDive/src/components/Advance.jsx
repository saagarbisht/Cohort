import React from 'react'
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from 'recoil'
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
    const todo = useRecoilValueLoadable(todosAtom(id))
    if(todo.state === "loading"){
        return (
            <div>
                loading ....
            </div>
        )
    }else if(todo.state === "hasValue"){
        return (
            <>
                <div>
                    <h2>
                        {todo.contents.title}
                    </h2>
                    <h4>
                        {todo.contents.description}
                    </h4>
                </div>
            </>
        )
    }
}
