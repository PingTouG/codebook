import fs from 'fs'
import path from 'path'
import marked from 'marked'
import hljs from 'highlight.js'
import grayMatter from 'gray-matter'
import { MD_BASE_PATH } from '$lib/config'
import type { Article } from '$lib/types'

const resolve = (filename:string) => path.resolve(MD_BASE_PATH,filename)

// 加载markdown文件
export const loadMarkdown = (filename: string): string => fs.readFileSync(resolve(filename), 'utf-8')
// 渲染markdown内容
export const generateDoc = (markdown: string): string => {
	// Parse front matter
	const { data, content } = grayMatter(markdown)
	// Render html from string
	const renderer = new marked.Renderer()
	const html = marked(content, {
		renderer,
		highlight: (code: string) => hljs.highlightAuto(code).value,
	})

	return JSON.stringify({ ...data, html })
}

// 读取md文件名
export const loadMarkdownDir = (dir:string):Array<Article> => {
	const fileList:Array<string> = fs.readdirSync(resolve(dir))

	const articles:Array<Article> = fileList.map(filename => {
		const markdown = loadMarkdown(`${dir}/${filename}`)
		const { data:{title,slug,time,author,status} } = grayMatter(markdown)
		return {
			id:filename.replace('.md',''),
			title,
			slug,
			time,
			author,
			status
		}
	}).filter(item => item?.status === 'done')

	return articles
}