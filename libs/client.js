import {createClient} from 'microcms-js-sdk'
export const client = createClient({
    serviceDomain: 'nnnn',
    apiKey: process.env.API_KEY,
})
