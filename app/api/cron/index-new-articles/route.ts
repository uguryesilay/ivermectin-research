import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { submitUrlsToGoogle } from '@/lib/indexing'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivermectintablets2026.com'

interface Article {
    slug: string
    publishedAt: string
    title: string
}

/**
 * Get all articles published today
 */
function getTodaysArticles(): Article[] {
    const contentDir = path.join(process.cwd(), 'content')
    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'))

    const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
    const todaysArticles: Article[] = []

    for (const file of files) {
        const filePath = path.join(contentDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(fileContent)

        if (data.publishedAt === today) {
            todaysArticles.push({
                slug: path.basename(file, '.mdx'),
                publishedAt: data.publishedAt,
                title: data.title || file,
            })
        }
    }

    return todaysArticles
}

/**
 * Cron endpoint: Index newly published articles
 * Runs daily via Vercel Cron
 */
export async function GET(request: NextRequest) {
    try {
        // Verify cron secret for security
        const authHeader = request.headers.get('authorization')
        const expectedAuth = `Bearer ${process.env.CRON_SECRET}`

        if (!authHeader || authHeader !== expectedAuth) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        // Get today's articles
        const todaysArticles = getTodaysArticles()
        const today = new Date().toISOString().split('T')[0]

        console.log(`📅 Cron running for ${today}`)
        console.log(`📝 Found ${todaysArticles.length} articles to index`)

        if (todaysArticles.length === 0) {
            return NextResponse.json({
                success: true,
                indexed: 0,
                urls: [],
                date: today,
                message: 'No articles published today',
            })
        }

        // Build URLs
        const urls = todaysArticles.map(article => `${SITE_URL}/${article.slug}`)

        // Submit to Google Indexing API
        const results = await submitUrlsToGoogle(urls)

        // Count successes
        const successCount = results.filter(r => r.success).length
        const failedUrls = results.filter(r => !r.success).map(r => ({
            url: r.url,
            error: r.error,
        }))

        console.log(`✅ Successfully indexed ${successCount}/${urls.length} URLs`)

        if (failedUrls.length > 0) {
            console.error('❌ Failed URLs:', failedUrls)
        }

        return NextResponse.json({
            success: true,
            indexed: successCount,
            failed: failedUrls.length,
            urls: results.map(r => r.url),
            failedUrls: failedUrls.length > 0 ? failedUrls : undefined,
            articles: todaysArticles,
            date: today,
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        console.error('Cron job error:', errorMessage)

        return NextResponse.json(
            {
                success: false,
                error: errorMessage,
                date: new Date().toISOString().split('T')[0],
            },
            { status: 500 }
        )
    }
}
