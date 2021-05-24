/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
 export type Article = {
    id:string
    title:string
    slug:Array<string>
    time:string
    author:string
}