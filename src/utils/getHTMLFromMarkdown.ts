import { marked, Renderer } from 'marked'

const getHTMLFromMarkdown: GetHTMLFromMarkdown = (markdown, removePTags = false) => {
  if (removePTags) {
    Renderer.prototype.paragraph = (text) => text + '\n'
  }
  const html = marked.parse(markdown)
  return html
}

type GetHTMLFromMarkdown = (markdown: string, removePTags?: boolean) => string

export default getHTMLFromMarkdown
