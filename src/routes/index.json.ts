import fs from 'fs'
import { MD_BASE_PATH } from '$lib/config'
import type { RequestHandler } from '@sveltejs/kit';


export const get: RequestHandler<Array<string>> =  () => {
    const fileList = fs.readdirSync(MD_BASE_PATH)
    const books = fileList.filter(filename => {
        const state = fs.statSync(`${MD_BASE_PATH}/${filename}`)

        return state.isDirectory()
    })

    return {
        body:books
    }
};