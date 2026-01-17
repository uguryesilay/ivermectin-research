import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/mdx'

export default function sitemap() {
    const posts = getBlogPosts()

    const blogPosts = posts.map((post) => ({
        url: `https://ivermectintablets2026.com/${post.slug}`,
        lastModified: post.metadata.publishedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: 'https://ivermectintablets2026.com',
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        ...blogPosts,
    ]
}
