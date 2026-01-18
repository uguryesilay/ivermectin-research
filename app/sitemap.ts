import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/mdx'
import { getArticleCategory, CATEGORIES } from '@/lib/categories'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getBlogPosts()
    const baseUrl = 'https://ivermectintablets2026.com'

    // Homepage
    const homepage = {
        url: baseUrl,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 1,
    }

    // Category pages
    const categoryPages = CATEGORIES.map((category) => ({
        url: `${baseUrl}/${category.slug}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Article pages with correct URLs: /category/article-slug
    const articlePages = posts.map((post) => {
        const category = getArticleCategory(post.slug)
        return {
            url: `${baseUrl}/${category.slug}/${post.slug}`,
            lastModified: post.metadata.publishedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }
    })

    return [
        homepage,
        ...categoryPages,
        ...articlePages,
    ]
}
