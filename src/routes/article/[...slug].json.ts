import send from '@polka/send'
import { loadMarkdown, generateDoc } from '../../markdown'

export function get({ params: { slug:[category,id] } }, res) {
	const markdown = loadMarkdown(`${category}/${id}.md`)
	const doc = generateDoc(markdown)
	send(res, 200, doc, { 'Content-Type': 'application/json' })
}
