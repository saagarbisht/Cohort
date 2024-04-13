import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notificationAtom, totalNoificationSelector } from '../stores/atom'

export default function Basic() {
    return (
        <>
            <RecoilRoot>
                <Navbar />
            </RecoilRoot>
        </>
    )
}


function Navbar(){
    const notification = useRecoilValue(notificationAtom)
    const totalNotification = useRecoilValue(totalNoificationSelector)
    return (
        <>
            <button>Home</button>
            <button>My Network ({notification.network})</button>
            <button>Jobs ({notification.jobs})</button>
            <button>Messaging ({notification.messaging})</button>
            <button>Notifications ({notification.notifications})</button>
            <button>Me ({totalNotification})</button>
        </>
    )
}