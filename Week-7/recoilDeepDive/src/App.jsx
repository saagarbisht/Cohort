import React from 'react'
import {RecoilRoot} from "recoil"
import Basic from './components/Basic'
import Advance from './components/Advance'

export default function App() {
  return (
    <RecoilRoot>
        <h1 style={{textAlign : 'center', fontFamily : 'Cambria'}}>Basic</h1>
        <Basic />
        <h1 style={{textAlign : 'center', fontFamily : 'Cambria'}}>Advance</h1>
        <Advance />
    </RecoilRoot>
  )
}
