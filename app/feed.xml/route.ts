import { getBlogPosts } from '@/lib/mdx'
import { getArticleCategory } from '@/lib/categories'

const baseUrl = 'https://ivermectintablets2026.com'

export async function GET() {
    const posts = getBlogPosts()

    const itemsXml = posts
        .sort((a, b) =>
            new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
        )
        .map((post) => {
            const category = getArticleCategory(post.slug)
            return `
    <item>
      <title><![CDATA[${post.metadata.title}]]></title>
      <link>${baseUrl}/${category.slug}/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${category.slug}/${post.slug}</guid>
      <description><![CDATA[${post.metadata.summary}]]></description>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <author>${post.metadata.author || 'Dr. Sarah Chen, MD'}</author>
    </item>`
        })
        .join('')

    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ivermectin Research</title>
    <link>${baseUrl}</link>
    <description>Evidence-based medical information on ivermectin uses, dosage, safety, and research.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`

    return new Response(rssFeed, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    })
}
