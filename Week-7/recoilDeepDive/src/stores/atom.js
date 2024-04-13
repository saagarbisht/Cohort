import { atom, atomFamily, selector, selectorFamily } from "recoil"
import {todos} from "../data/todo"
import axios from "axios"

export const notificationAtom = atom({
    key : "notificationAtom",
    default : selector({
        key : "notificationSelector",
        get : async() => {
            const responce = await  fetch("https://sum-server.100xdevs.com/notifications");
            const data = await responce.json();
            return data;
        }
    })
})

export const totalNoificationSelector = selector({
    key : "totalSelector",
    get : ({get}) => {
        const notification = get(notificationAtom);
        return notification.network + notification.jobs + notification.messaging + notification.notifications;
    }
})

export const todosAtom = atomFamily({
    key : "atomFamily",
    default : selectorFamily({
        key : "selectorFamily",
        get : (id) => async({get}) => {
            await new Promise(res => setTimeout(() => res("hello"),4000));
            const responce = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return responce.data.todo;
        }
    })
})