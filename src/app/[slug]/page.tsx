import getPostMdx from 'lib/getPostMdx'
import Params from 'types/Params'
import generateSEOData from 'lib/generateSEOData'
import { Metadata } from 'next'
import getSlugPath from 'lib/getSlugPath'

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resoveParams = await params
  const { meta } = await getPageContent(resoveParams.slug)
  return generateSEOData({ title: meta.title, subtitle: meta.subtitle, date: meta.date })
}

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostMdx(slug)
  return { meta, content }
}

async function Page({ params }: Params) {
  const resolveParams = await params
  const { content } = await getPageContent(resolveParams.slug)

  return <>{content}</>
}

export async function generateStaticParams() {
  const posts = await getSlugPath()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default Page
