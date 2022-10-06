import { marked, Renderer } from 'marked'

const getHTMLFromMarkdown: GetHTMLFromMarkdown = (markdown, removePTags = false) => {
  Renderer.prototype.paragraph = (text) => `<p>${text}</p>`
  if (removePTags) {
    Renderer.prototype.paragraph = (text) => text
  }
  const html = marked.parse(markdown)
  return html
}

type GetHTMLFromMarkdown = (markdown: string, removePTags?: boolean) => string

export default getHTMLFromMarkdown
