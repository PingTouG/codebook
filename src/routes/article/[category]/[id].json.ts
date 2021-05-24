import { loadMarkdown, generateDoc } from '../../../markdown'
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<string> = async ( { params:{ category,id } } ) => {
	const markdown = loadMarkdown(`${category}/${id}.md`)
	const doc = generateDoc(markdown)
	
	return {
		body: doc
	};
};
