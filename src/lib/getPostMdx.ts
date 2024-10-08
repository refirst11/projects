import fs from 'fs'
import path from 'path'
import gfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import { ReturnData, PostData } from 'types/PostData'
import { compileMDX } from 'next-mdx-remote/rsc'
import MagicCard from 'components/MagicCard'
import PageFitter from 'components/PageFitter'
import TextScaler from 'components/TextScaler'
import Firemotion from 'components/Firemotion'

const Element = {
  MagicCard,
  PageFitter,
  TextScaler,
  Firemotion,
}

const getPostMdx = async (slug: string): Promise<ReturnData> => {
  const folder = path.join(process.cwd(), '/src/projects')
  const fullPath = path.join(folder, `${slug}.mdx`)
  const file = fs.readFileSync(fullPath, 'utf8')
  const { frontmatter, content } = await compileMDX<PostData>({
    components: Element,
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [gfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: 'css-variables',
              keepBackground: true,
              onVisitHighlightedLine(node: { properties: { className: string[] } }) {
                node.properties.className.push('highlighted')
              },
            },
          ],
        ],
      },
    },
  })
  return { meta: { ...frontmatter }, content: content }
}

export default getPostMdx
