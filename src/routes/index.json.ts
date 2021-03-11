import send from '@polka/send'
import fs from 'fs'
import {MD_BASE_PATH} from '../config'

export function get(_params, res) {
    const fileList = fs.readdirSync(MD_BASE_PATH)
    const books = fileList.filter(filename => {
        const state = fs.statSync(`${MD_BASE_PATH}/${filename}`)

        return state.isDirectory()
    })
	const json = JSON.stringify({books})
	send(res, 200, json , { 'Content-Type': 'application/json' })
}
