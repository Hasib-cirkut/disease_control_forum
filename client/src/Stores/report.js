import {readable} from 'svelte/store'


async function api_call () {
let reData = await fetch('http://localhost:3000/reports/allReport')

    reData = await reData.json()

    return reData
}


export const reportStore = readable(api_call())