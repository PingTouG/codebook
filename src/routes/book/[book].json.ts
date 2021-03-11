import send from '@polka/send'
import { loadMarkdownDir } from '../../markdown'

export function get({ params: { book } }, res) {
	const articles = loadMarkdownDir(book)
	const json = JSON.stringify({articles})
	send(res, 200, json , { 'Content-Type': 'application/json' })
}
