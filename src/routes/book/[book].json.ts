import { loadMarkdownDir } from '../../markdown'
import type { RequestHandler } from '@sveltejs/kit';
import type { Article } from '$lib/types';

export const get: RequestHandler<Array<Article>> = async ({params:{book}}) => {
	const articles = loadMarkdownDir(book)

	return {
		body: articles
	};
};
