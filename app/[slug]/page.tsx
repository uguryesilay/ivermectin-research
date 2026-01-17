import { getBlogPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

const mdxOptions = {
    mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex],
    },
}

export async function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getBlogPosts().find((post) => post.slug === slug)
    if (!post) {
        return
    }

    const publishedTime = new Date(post.metadata.publishedAt).toISOString()
    const modifiedTime = publishedTime // Can be updated when post is modified

    return {
        title: post.metadata.title,
        description: post.metadata.summary,
        authors: [{ name: post.metadata.author }],
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.summary,
            type: 'article',
            publishedTime,
            modifiedTime,
            authors: [post.metadata.author],
            images: post.metadata.image ? [
                {
                    url: post.metadata.image,
                    width: 1200,
                    height: 630,
                    alt: post.metadata.title,
                }
            ] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.metadata.title,
            description: post.metadata.summary,
            images: post.metadata.image ? [post.metadata.image] : [],
        },
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getBlogPosts().find((post) => post.slug === slug)

    if (!post) {
        notFound()
    }

    // Generate JSON-LD structured data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.metadata.title,
        description: post.metadata.summary,
        image: post.metadata.image || '',
        datePublished: new Date(post.metadata.publishedAt).toISOString(),
        dateModified: new Date(post.metadata.publishedAt).toISOString(),
        author: {
            '@type': 'Person',
            name: post.metadata.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Medical Research Blog',
            logo: {
                '@type': 'ImageObject',
                url: 'https://yourdomain.com/logo.png',
            },
        },
    }

    return (
        <div className="flex justify-center w-full">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold font-heading tracking-tight lg:text-5xl">
                        {post.metadata.title}
                    </h1>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <p>{post.metadata.publishedAt}</p>
                        <span>•</span>
                        <p>{post.metadata.author}</p>
                    </div>
                </div>
                <div className="mt-8 prose dark:prose-invert max-w-none">
                    <MDXRemote source={post.content} options={mdxOptions} />
                </div>
            </article>
        </div>
    )
}
