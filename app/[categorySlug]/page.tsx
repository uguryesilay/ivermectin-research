import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getBlogPosts } from "@/lib/mdx"
import { getCategoryBySlug, getArticleCategory } from "@/lib/categories"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { Metadata } from 'next'

export async function generateStaticParams() {
    return [
        { categorySlug: 'medical-uses' },
        { categorySlug: 'dosage-administration' },
        { categorySlug: 'safety-side-effects' },
        { categorySlug: 'buying-guide' },
        { categorySlug: 'research-mechanism' },
    ]
}

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }): Promise<Metadata> {
    const categorySlug = (await params).categorySlug
    const category = getCategoryBySlug(categorySlug)
    if (!category) return {}

    return {
        title: `${category.title} | Ivermectin Research`,
        description: category.description,
    }
}

// Category content
const categoryContent: Record<string, { h1: string; intro: string; sections: { title: string; content: string; links: { text: string; href: string }[] }[] }> = {
    'medical-uses': {
        h1: "Ivermectin Tablets Medical Uses: FDA-Approved Treatments & Applications",
        intro: "Ivermectin is one of the most important drugs in modern medicine. First developed in the 1970s, it has saved millions of lives.",
        sections: [
            {
                title: "FDA-Approved Parasitic Infections",
                content: "Ivermectin is FDA-approved for treating several parasitic conditions with cure rates over 80%.",
                links: [
                    { text: "Parasites Guide", href: "/medical-uses/ivermectin-for-parasites-types-treated-and-effectiveness" },
                    { text: "Uses Overview", href: "/medical-uses/what-is-ivermectin-used-for-fda-approved-and-off-label-uses" }
                ]
            },
            {
                title: "Skin Conditions",
                content: "Ivermectin treats scabies effectively as an alternative to topical treatments.",
                links: [
                    { text: "Scabies Treatment", href: "/medical-uses/ivermectin-for-scabies-treatment-protocol-and-success-rates" }
                ]
            }
        ]
    },
    'dosage-administration': {
        h1: "Ivermectin Tablets Dosage & Administration: Weight-Based Dosing Charts",
        intro: "Proper dosing is essential for ivermectin. The drug is dosed by body weight, typically 150-200 mcg per kilogram.",
        sections: [
            {
                title: "Weight-Based Dosing",
                content: "For most infections, ivermectin is given based on body weight. A 70 kg adult would get about 12 mg.",
                links: [
                    { text: "Complete Dosage Guide", href: "/dosage-administration/ivermectin-dosage-for-humans-complete-guide-by-weight-and-condition" },
                    { text: "12mg Tablets", href: "/dosage-administration/ivermectin-12mg-tablets-complete-usage-guide" }
                ]
            }
        ]
    },
    'safety-side-effects': {
        h1: "Ivermectin Tablets Safety & Side Effects: What You Need to Know",
        intro: "Ivermectin has an excellent safety record when used correctly. Billions of doses have been given worldwide.",
        sections: [
            {
                title: "Common Side Effects",
                content: "Most side effects are mild: headache, dizziness, and nausea.",
                links: [
                    { text: "Side Effects Guide", href: "/safety-side-effects/ivermectin-side-effects-complete-safety-guide" }
                ]
            }
        ]
    },
    'buying-guide': {
        h1: "Ivermectin Tablets Buying Guide: Safe & Legal Purchase Options",
        intro: "Buying ivermectin safely requires knowing where to get legitimate products.",
        sections: [
            {
                title: "Prescription Requirements",
                content: "In the United States, ivermectin requires a prescription for human use.",
                links: [
                    { text: "Get a Prescription", href: "/buying-guide/how-to-get-ivermectin-prescription-and-access-guide" }
                ]
            }
        ]
    },
    'research-mechanism': {
        h1: "Ivermectin Research & Mechanism: How This Nobel Prize Drug Works",
        intro: "Ivermectin's discovery earned the 2015 Nobel Prize.",
        sections: [
            {
                title: "Mechanism of Action",
                content: "Ivermectin binds to glutamate-gated chloride channels causing paralysis in parasites.",
                links: [
                    { text: "Mechanism Explained", href: "/research-mechanism/how-ivermectin-works-mechanism-of-action-explained" }
                ]
            }
        ]
    }
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
    const categorySlug = (await params).categorySlug
    const category = getCategoryBySlug(categorySlug)

    if (!category) {
        notFound()
    }

    const content = categoryContent[categorySlug]
    const allPosts = getBlogPosts()
    const categoryPosts = allPosts.filter(post => {
        const cat = getArticleCategory(post.slug)
        return cat.slug === categorySlug
    })

    // Generate Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema(category.title, categorySlug)

    return (
        <>
            {/* Breadcrumb JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="min-h-screen bg-white dark:bg-gray-950">
                {/* Breadcrumb Navigation */}
                <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
                            <Link href="/" className="hover:text-blue-600">Home</Link>
                            <span aria-hidden="true">›</span>
                            <span className="text-gray-900 dark:text-white">{category.title}</span>
                        </nav>
                    </div>
                </div>

                <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <p className="text-blue-600 text-sm font-medium mb-2">Ivermectin Research • 2026</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</p>
                    </div>
                </section>

                <article className="py-10">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{content?.h1}</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">{content?.intro}</p>
                        <div className="space-y-8">
                            {content?.sections.map((section, idx) => (
                                <div key={idx}>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{section.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{section.content}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {section.links.map((link, i) => (
                                            <Link key={i} href={link.href} className="text-blue-600 hover:underline text-sm">→ {link.text}</Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>

                <section className="py-10 bg-gray-50 dark:bg-gray-900">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">All Articles ({categoryPosts.length})</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoryPosts.map((post) => (
                                <Link key={post.slug} href={`/${categorySlug}/${post.slug}`} className="group">
                                    <article className="bg-white dark:bg-gray-800 rounded-lg border overflow-hidden hover:shadow-md h-full">
                                        <div className="relative aspect-video">
                                            <Image src={`/images/${post.slug}-hero.webp`} alt={post.metadata.title} fill className="object-cover" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600">{post.metadata.title}</h3>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

