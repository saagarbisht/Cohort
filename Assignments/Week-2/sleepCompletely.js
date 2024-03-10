/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
    const request = await new Promise(resolve => setTimeout(() => resolve("Promise is resolved"),milliseconds));
    return request;
}

sleep(3000).then(data => console.log(data));