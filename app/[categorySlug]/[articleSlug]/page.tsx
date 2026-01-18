import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getBlogPosts } from "@/lib/mdx"
import { getCategoryBySlug, getArticleCategory } from "@/lib/categories"
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema"
import { Metadata } from 'next'

// Helper function to generate slug from text
function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

// Custom components for MDX
const components = {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <Image
            src={props.src || ''}
            alt={props.alt || 'Ivermectin medical illustration'}
            width={800}
            height={450}
            className="rounded-lg w-full my-6"
        />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => {
        const children = props.children as React.ReactNode
        if (typeof children === 'object' && children !== null && 'type' in (children as any) && (children as any).type === 'img') {
            return <>{children}</>
        }
        return <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
    },
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
        const text = typeof props.children === 'string' ? props.children : ''
        const id = props.id || slugify(text)
        return <h2 id={id} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4" {...props} />
    },
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
        const text = typeof props.children === 'string' ? props.children : ''
        const id = props.id || slugify(text)
        return <h3 id={id} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3" {...props} />
    },
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <Link href={props.href || '#'} className="text-blue-600 hover:underline">
            {props.children}
        </Link>
    ),
    // Table components for markdown tables
    table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700" {...props} />
        </div>
    ),
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
    ),
    tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700" {...props} />
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50" {...props} />
    ),
    th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" {...props} />
    ),
    td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700" {...props} />
    ),
}

export async function generateStaticParams() {
    const allPosts = getBlogPosts()
    return allPosts.map(post => {
        const category = getArticleCategory(post.slug)
        return {
            categorySlug: category.slug,
            articleSlug: post.slug
        }
    })
}

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string; articleSlug: string }> }): Promise<Metadata> {
    const { categorySlug, articleSlug } = await params
    const allPosts = getBlogPosts()
    const post = allPosts.find(p => p.slug === articleSlug)
    if (!post) return {}

    const category = getArticleCategory(articleSlug)
    const baseUrl = "https://ivermectintablets2026.com"

    return {
        title: post.metadata.title,
        description: post.metadata.summary,
        authors: [{ name: post.metadata.author || "Dr. Sarah Chen, MD" }],
        alternates: {
            canonical: `${baseUrl}/${categorySlug}/${articleSlug}`
        },
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.summary,
            type: 'article',
            publishedTime: post.metadata.publishedAt,
            authors: [post.metadata.author || "Dr. Sarah Chen, MD"],
            images: [`${baseUrl}/images/${articleSlug}-hero.webp`]
        }
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ categorySlug: string; articleSlug: string }> }) {
    const { categorySlug, articleSlug } = await params

    const allPosts = getBlogPosts()
    const post = allPosts.find(p => p.slug === articleSlug)

    if (!post) {
        notFound()
    }

    const category = getArticleCategory(articleSlug)

    if (category.slug !== categorySlug) {
        notFound()
    }

    // Generate JSON-LD schemas
    const articleSchema = generateArticleSchema({
        title: post.metadata.title,
        description: post.metadata.summary,
        publishedAt: post.metadata.publishedAt,
        author: post.metadata.author,
        slug: articleSlug,
        categorySlug: categorySlug,
        image: `/images/${articleSlug}-hero.webp`
    })

    const breadcrumbSchema = generateBreadcrumbSchema(
        category.title,
        categorySlug,
        post.metadata.title,
        articleSlug
    )

    // Calculate reading time
    const wordCount = post.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    return (
        <>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="min-h-screen bg-white dark:bg-gray-950">
                {/* Breadcrumb */}
                <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
                            <Link href="/" className="hover:text-blue-600">Home</Link>
                            <span aria-hidden="true">›</span>
                            <Link href={`/${category.slug}`} className="hover:text-blue-600">{category.title}</Link>
                            <span aria-hidden="true">›</span>
                            <span className="text-gray-900 dark:text-white truncate max-w-[200px]">{post.metadata.title}</span>
                        </nav>
                    </div>
                </div>

                {/* Article */}
                <article className="py-10" itemScope itemType="https://schema.org/MedicalWebPage">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <header className="mb-8">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4" itemProp="headline">
                                {post.metadata.title}
                            </h1>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <time dateTime={post.metadata.publishedAt} itemProp="datePublished">{post.metadata.publishedAt}</time>
                                {post.metadata.author && <span itemProp="author">• {post.metadata.author}</span>}
                                <span>• {readingTime} min read</span>
                            </div>
                        </header>

                        {/* MDX Content */}
                        <div className="prose prose-gray dark:prose-invert max-w-none" itemProp="articleBody">
                            <MDXRemote source={post.content} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                        </div>

                        {/* Medical Disclaimer */}
                        <div className="mt-10 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>Medical Disclaimer:</strong> This content is for educational purposes only. Always consult a healthcare provider before using ivermectin.
                            </p>
                        </div>
                    </div>
                </article>

                {/* Related Articles from Same Category */}
                {(() => {
                    const relatedPosts = allPosts
                        .filter(p => {
                            const pCategory = getArticleCategory(p.slug)
                            return pCategory.slug === category.slug && p.slug !== post.slug
                        })
                        .slice(0, 4)

                    if (relatedPosts.length === 0) return null

                    return (
                        <section className="py-12 bg-gray-50 dark:bg-gray-900">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    You May Also Like
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {relatedPosts.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/${category.slug}/${related.slug}`}
                                            className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
                                        >
                                            <div className="relative aspect-[16/9]">
                                                <Image
                                                    src={`/images/${related.slug}-hero.webp`}
                                                    alt={related.metadata.title}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, 50vw"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="p-3">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {related.metadata.title}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )
                })()}

                {/* Back link */}
                <section className="py-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href={`/${category.slug}`} className="text-blue-600 hover:underline">
                            ← Back to {category.title}
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}
